import { useState } from "react";

let sharedMessages: Record<string, string[]> = {}; // A centralized state for all friends' messages

export const useLastMessage = (friendName: string) => {
  const [messages, setMessages] = useState<string[]>(sharedMessages[friendName] || []);

  const addMessage = (message: string) => {
    const updatedMessages = [...messages, message];
    sharedMessages[friendName] = updatedMessages;
    setMessages(updatedMessages);
  };

  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : "";

  return { messages, addMessage, lastMessage };
};
