import "./MenuButton.css";

function Button({ isOpen, imageSrc, text }) {
  return (
    <div>
      <button className="sidebar-menu">
        {isOpen ? (
          <div className="open menu-item">
            <div>
              <img src={imageSrc} alt="asd" className="open_menu_icon" />
            </div>
            <h2>{text}</h2>
          </div>
        ) : (
          <img src={imageSrc} alt="asd" className="close_menu_icon" />
        )}
      </button>
    </div>
  );
}

export default Button;
