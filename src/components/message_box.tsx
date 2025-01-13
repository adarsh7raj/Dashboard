// 




import { useState, useRef, useEffect } from "react";
import { useLastMessage } from "../hooks/message";
import { Avatar } from "./avatar";
interface Friend {
  id: number;
  name: string;
  LastMessage: string;
  email: string;
  location: string;
  icon: string;
  profile_pic:string
}
interface MessageBox {
  name: string;
  updateLastMessage:(friendName: string, message: string) => void;
  friend_detail:Friend|undefined
}

export const MessageBox = ({ name,updateLastMessage,friend_detail }: MessageBox) => {
  const { messages, addMessage } = useLastMessage(name);
  const [sentMessage, setSentMessage] = useState<string>("");

  const sendSound = useRef(new Audio("/sounds/message-tone.mp3"));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (sentMessage.trim()) {
      sendSound.current.play();
      updateLastMessage(name,sentMessage);
      addMessage(sentMessage);
      setSentMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-y-hidden min-h-screen bg-gray-200">
      <div className="border border-gray-300 rounded-lg overflow-hidden w-[500px] h-screen bg-white shadow-lg">
        <div className="flex items-center bg-gray-300 text-gray-600 font-semibold text-lg p-4">
          <span className="text-gray-500 mr-4">
            <Avatar name={name} profile_pic={friend_detail?.profile_pic} />
          </span>
          <div className="flex flex-col">
          <div>{name}</div>
          <div className="text-sm">{friend_detail?.email}</div>
          </div>
         
        </div>

        <ul className="flex flex-col bg-[url('https://media.istockphoto.com/id/1403848173/vector/vector-online-chatting-pattern-online-chatting-seamless-background.jpg?s=612x612&w=0&k=20&c=W3O15mtJiNlJuIgU6S9ZlnzM_yCE27eqwTCfXGYwCSo=')] w-full h-[500px] overflow-y-scroll p-4">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`${
                index % 2 === 0
                  ? "self-start bg-gray-400 rounded-tl-lg rounded-br-lg"
                  : "self-end bg-blue-600 text-black rounded-tr-lg rounded-bl-lg"
              } px-3 py-1 my-2 max-w-xs shadow-md`}
            >
              <p className="text-lg">{msg}</p>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>

        <form className="flex w-full p-3 bg-white" onSubmit={handleSendMessage}>
          <input
            className="flex-grow h-10 px-3 border-none outline-none bg-gray-50"
            type="text"
            value={sentMessage}
            onChange={(e) => setSentMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="h-10 px-4 ml-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Send <i className="fa-solid fa-paper-plane ml-2"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
