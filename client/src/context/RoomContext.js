import React, { createContext, useState } from "react";
import { ReactComponent as ChillIcon1 } from "../assets/icons/chill01.svg";
import { ReactComponent as DebateIcon1 } from "../assets/icons/debate01.svg";
import { ReactComponent as DebateIcon2 } from "../assets/icons/debate02.svg";
import { ReactComponent as GameIcon1 } from "../assets/icons/game01.svg";
import { ReactComponent as SportIcon1 } from "../assets/icons/sport01.svg";
import { ReactComponent as SportIcon2 } from "../assets/icons/sport02.svg";
import { ReactComponent as SportIcon3 } from "../assets/icons/sport03.svg";
import { ReactComponent as SportIcon4 } from "../assets/icons/sport04.svg";
import { ReactComponent as SportIcon5 } from "../assets/icons/sport05.svg";
import { ReactComponent as TechIcon1 } from "../assets/icons/tech01.svg";
import { ReactComponent as TechIcon2 } from "../assets/icons/tech02.svg";

export const RoomContext = createContext();

const chatRooms = [
  {
    id: "1",
    name: "Chill",
    icon: <ChillIcon1 />,
  },
  {
    id: "2",
    name: "Debate",
    // icon: <DebateIcon1 />,
    icon: <DebateIcon2 />,
  },
  {
    id: "3",
    name: "Tech",
    // icon: <TechIcon1 />,
    icon: <TechIcon2 />,
  },
  {
    id: "4",
    name: "Game",
    icon: <GameIcon1 />,
  },
  {
    id: "5",
    name: "Sport",
    icon: <SportIcon1 />,
    // icon: <SportIcon2 />,
    // icon: <SportIcon3 />,
    // icon: <SportIcon4 />,
    // icon: <SportIcon5 />,
  },
];

function RoomContextProvider(props) {
  const [rooms, setRooms] = useState(chatRooms);

  return (
    <RoomContext.Provider value={{ rooms }}>
      {props.children}
    </RoomContext.Provider>
  );
}

export default RoomContextProvider;
