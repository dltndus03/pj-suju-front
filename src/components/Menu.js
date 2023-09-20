import React, { useState } from "react";
import "./Menu.css";
import Button from "./MenuButton";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? (
            <img
              src={require("../img/close.png")}
              alt="asd"
              className="close_icon"
            />
          ) : (
            <img
              src={require("../img/menu.png")}
              alt="asd"
              className="menu_icon"
            />
          )}
        </button>
      </div>
      <Button
        isOpen={isOpen}
        imageSrc={require("../img/calender.png")}
        text="Calendar"
      />
      <Button
        isOpen={isOpen}
        imageSrc={require("../img/study.png")}
        text="Study"
      />
      <Button
        isOpen={isOpen}
        imageSrc={require("../img/game.png")}
        text="Game"
      />
    </div>
  );
}
//<img src={require("../img/menu.png")} alt="asd" />
export default Menu;
