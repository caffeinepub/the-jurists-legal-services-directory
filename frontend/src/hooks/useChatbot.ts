import { useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp: number;
}

const INITIAL_GREETING: ChatMessage = {
  role: 'bot',
  content: "Hello! I'm here to help with your legal inquiries. How can I assist you today? You can ask me about our practice areas, office locations, consultation process, or jurisdictions we cover.",
  timestamp: Date.now(),
};

export function useChatbot() {
  const { actor } = useActor();
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);

  const mutation = useMutation({
    mutationFn: async (message: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.getChatbotResponse(message);
    },
    onSuccess: (response) => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: response,
          timestamp: Date.now(),
        },
      ]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: 'I apologize, something went wrong. Please try again or use our contact form for assistance.',
          timestamp: Date.now(),
        },
      ]);
    },
  });

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      setMessages((prev) => [
        ...prev,
        {
          role: 'user',
          content: trimmed,
          timestamp: Date.now(),
        },
      ]);

      mutation.mutate(trimmed);
    },
    [mutation]
  );

  return {
    messages,
    sendMessage,
    isLoading: mutation.isPending,
  };
}
