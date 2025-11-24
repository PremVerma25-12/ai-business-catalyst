import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! 👋 How can we help you transform your business with AI today?",
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      // Add user message
      const userMessage: Message = { role: "user", content: message };
      setMessages((prev) => [...prev, userMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          role: "assistant",
          content: getAIResponse(message),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
      
      setMessage("");
    }
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
      return "We offer flexible pricing plans starting from Free tier. You can check our detailed pricing at the Pricing page or book a free consultation to discuss your specific needs!";
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

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-primary text-white rounded-full p-4 shadow-glow hover:scale-110 hover:rotate-12 transition-all duration-300 z-50 animate-pulse"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-card/95 backdrop-blur-xl border-2 border-primary/20 rounded-2xl shadow-glow flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-primary text-white p-4 rounded-t-2xl flex items-center justify-between shadow-lg">
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs opacity-90">We're here to help!</p>
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
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.role === "assistant"
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground ml-8"
                } rounded-lg p-3 animate-fade-in`}
              >
                <p className="text-sm whitespace-pre-line">{msg.content}</p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
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
