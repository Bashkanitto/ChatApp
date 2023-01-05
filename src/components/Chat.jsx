import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { signOut } from "firebase/auth";
import {auth} from '../firebase'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);


  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={data.user?.photoURL} alt=""/>
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <a href="tel:+7-747-200-42-49">
            <img src={Cam} alt="cam" />
          </a>
          <img src={Add} alt="add" />
          <button className="select" id="" onClick={()=>signOut(auth)}></button>

        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
