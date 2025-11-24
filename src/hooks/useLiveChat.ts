import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant" | "agent";
  content: string;
  is_read: boolean;
  created_at: string;
}

interface Conversation {
  id: string;
  user_name: string | null;
  user_email: string | null;
  status: string;
  created_at: string;
}

export const useLiveChat = () => {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  // Initialize or get conversation
  const initializeConversation = useCallback(async () => {
    try {
      const storedConvId = localStorage.getItem('chat_conversation_id');
      
      if (storedConvId) {
        // Check if conversation exists
        const { data: existingConv } = await supabase
          .from('chat_conversations')
          .select('*')
          .eq('id', storedConvId)
          .single();

        if (existingConv) {
          setConversationId(storedConvId);
          await loadMessages(storedConvId);
          return storedConvId;
        }
      }

      // Create new conversation
      const { data: newConv, error } = await supabase
        .from('chat_conversations')
        .insert({})
        .select()
        .single();

      if (error) throw error;

      setConversationId(newConv.id);
      localStorage.setItem('chat_conversation_id', newConv.id);
      
      // Send welcome message
      await sendSystemMessage(newConv.id);
      
      return newConv.id;
    } catch (error) {
      console.error('Error initializing conversation:', error);
      toast({
        title: "Error",
        description: "Failed to initialize chat",
        variant: "destructive",
      });
      return null;
    }
  }, [toast]);

  // Load messages
  const loadMessages = async (convId: string) => {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('conversation_id', convId)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setMessages(data as Message[]);
      calculateUnread(data as Message[]);
    }
  };

  // Calculate unread messages
  const calculateUnread = (msgs: Message[]) => {
    const unread = msgs.filter(m => m.role === 'assistant' && !m.is_read).length;
    setUnreadCount(unread);
  };

  // Mark messages as read
  const markAsRead = useCallback(async () => {
    if (!conversationId) return;

    const unreadMessages = messages.filter(m => m.role === 'assistant' && !m.is_read);
    
    for (const msg of unreadMessages) {
      await supabase
        .from('chat_messages')
        .update({ is_read: true })
        .eq('id', msg.id);
    }
    
    setUnreadCount(0);
  }, [conversationId, messages]);

  // Send message
  const sendMessage = useCallback(async (content: string) => {
    if (!conversationId || !content.trim()) return;

    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .insert({
          conversation_id: conversationId,
          role: 'user',
          content: content.trim(),
        })
        .select()
        .single();

      if (error) throw error;

      // Simulate AI response
      setTimeout(async () => {
        const response = getAIResponse(content);
        await supabase
          .from('chat_messages')
          .insert({
            conversation_id: conversationId,
            role: 'assistant',
            content: response,
            is_read: false,
          });
      }, 1500);

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  }, [conversationId, toast]);

  // Send system welcome message
  const sendSystemMessage = async (convId: string) => {
    await supabase
      .from('chat_messages')
      .insert({
        conversation_id: convId,
        role: 'assistant',
        content: "Hello! 👋 Welcome to AwsQuality AI Assistant. How can I help you transform your business with AI today?",
        is_read: false,
      });
  };

  // Update typing indicator
  const updateTypingIndicator = useCallback(async (isTyping: boolean) => {
    if (!conversationId) return;

    const userIdentifier = `user_${conversationId}`;

    await supabase
      .from('typing_indicators')
      .upsert({
        conversation_id: conversationId,
        user_identifier: userIdentifier,
        is_typing: isTyping,
      });

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    if (isTyping) {
      typingTimeoutRef.current = setTimeout(() => {
        updateTypingIndicator(false);
      }, 3000);
    }
  }, [conversationId]);

  // AI Response logic
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
      return "We offer flexible pricing plans starting from our Free tier. You can check our detailed pricing at the Pricing page or book a free consultation to discuss your specific needs!";
    } else if (lowerMessage.includes("service") || lowerMessage.includes("what do you")) {
      return "We provide AI-powered business solutions including Chatbots, Automation, Data Analytics, Custom AI Models, Marketing Tools, and more. Visit our Services page to learn more!";
    } else if (lowerMessage.includes("demo") || lowerMessage.includes("consultation") || lowerMessage.includes("book")) {
      return "Great! I'd be happy to help you book a free consultation. Please visit our Contact page or click 'Book Free Consultation' button to schedule a meeting with our team.";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
      return "You can reach us at:\n📧 Email: prenv6264@gmail.com\n📱 Phone: +91 7999 840 592\n💬 WhatsApp: +91 7999 840 592";
    } else {
      return "Thank you for your message! Our team specializes in AI solutions for businesses. Would you like to know about our services, pricing, or schedule a free consultation?";
    }
  };

  // Set up real-time subscriptions
  useEffect(() => {
    if (!conversationId) return;

    setIsConnected(true);

    // Subscribe to new messages
    const messagesChannel = supabase
      .channel(`messages_${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => [...prev, newMessage]);
          
          if (newMessage.role === 'assistant') {
            setUnreadCount(prev => prev + 1);
          }
        }
      )
      .subscribe();

    // Subscribe to typing indicators
    const typingChannel = supabase
      .channel(`typing_${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'typing_indicators',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          const indicator = payload.new as any;
          const userIdentifier = `user_${conversationId}`;
          
          // Only show typing for assistant/agent, not for the user themselves
          if (indicator.user_identifier !== userIdentifier) {
            setIsTyping(indicator.is_typing);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messagesChannel);
      supabase.removeChannel(typingChannel);
      setIsConnected(false);
    };
  }, [conversationId]);

  return {
    conversationId,
    messages,
    isTyping,
    unreadCount,
    isConnected,
    initializeConversation,
    sendMessage,
    markAsRead,
    updateTypingIndicator,
  };
};
