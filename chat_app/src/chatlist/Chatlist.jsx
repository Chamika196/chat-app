import React, { useState } from "react";
import "./Chatlist.css";
import Chatlistitems from "./Chatlistitems";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

const allChatUsers = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    id: 1,
    name: "Tim Hover",
    active: true,
    isOnline: true,
  },
  
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    id: 2,
    name: "Hamaad Dejesus",
    active: false,
    isOnline: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
    id: 3,
    name: "Eleni Hobbs",
    active: false,
    isOnline: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
    id: 4,
    name: "Elsa Black",
    active: false,
    isOnline: false,
  },
  {
    image:
      "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
    id: 5,
    name: "Kayley Mellor",
    active: false,
    isOnline: true,
  },
 
 
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
    id: 6,
    name: "Allen Woodley",
    active: false,
    isOnline: true,
  },
  {
    image: "https://pbs.twimg.com/profile_images/770394499/female.png",
    id: 7,
    name: "Manpreet David",
    active: false,
    isOnline: true,
  },
];

const Chatlist = () => {
  const [allChats] = useState(allChatUsers);

  return (
    <div className="main__chatlist">
      <Button type="primary" icon={<PlusCircleOutlined />} size="large">
        New Conversation
      </Button>
      <div className="chatlist__heading">
        <h2>Chats</h2>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <Button
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "auto" }}>Search</span>
            <SearchOutlined />
          </Button>
        </div>
      </div>
      <div className="chatlist__items">
        {allChats.map((item, index) => {
          return (
            <Chatlistitems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chatlist;
