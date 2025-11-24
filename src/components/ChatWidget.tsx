import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLiveChat } from "@/hooks/useLiveChat";
import { cn } from "@/lib/utils";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    conversationId,
    messages,
    isTyping,
    unreadCount,
    isConnected,
    initializeConversation,
    sendMessage,
    markAsRead,
    updateTypingIndicator,
  } = useLiveChat();

  // Initialize conversation on mount
  useEffect(() => {
    initializeConversation();
  }, [initializeConversation]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mark messages as read when chat is opened
  useEffect(() => {
    if (isOpen) {
      markAsRead();
    }
  }, [isOpen, markAsRead]);

  const handleSend = () => {
    if (message.trim() && conversationId) {
      sendMessage(message);
      setMessage("");
      updateTypingIndicator(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    updateTypingIndicator(true);
  };

  const handleOpen = () => {
    setIsOpen(true);
    markAsRead();
  };

  return (
    <>
      {/* Chat Button with Notification Badge */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleOpen}
            className="relative bg-gradient-primary text-white rounded-full p-4 shadow-glow hover:scale-110 hover:rotate-12 transition-all duration-300 animate-pulse"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
            {unreadCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs animate-bounce"
              >
                {unreadCount}
              </Badge>
            )}
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-[500px] bg-card/95 backdrop-blur-xl border-2 border-primary/20 rounded-2xl shadow-glow flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-primary text-white p-4 rounded-t-2xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  AI Assistant
                  {isConnected ? (
                    <Wifi size={14} className="text-green-300" />
                  ) : (
                    <WifiOff size={14} className="text-red-300" />
                  )}
                </h3>
                <p className="text-xs opacity-90">
                  {isConnected ? "Online" : "Connecting..."}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "rounded-lg p-3 animate-fade-in max-w-[85%]",
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-secondary text-secondary-foreground mr-auto"
                )}
              >
                <p className="text-sm whitespace-pre-line">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {new Date(msg.created_at).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="bg-secondary text-secondary-foreground rounded-lg p-3 animate-fade-in max-w-[85%]">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
                disabled={!isConnected}
              />
              <Button 
                onClick={handleSend} 
                size="icon"
                disabled={!message.trim() || !isConnected}
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
