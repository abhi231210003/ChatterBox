import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import profile from "../../../public/user.jpg";
function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`rounded-3xl duration-300 ${
        isSelected ? "bg-gray-900" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex  rounded-3xl space-x-4 px-2 py-3 hover:bg-gray-900 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={profile} />
            {/* <img src="/user.jpg" alt="User" /> */}

          </div>
        </div>
        <div>
          <h1 className=" font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
