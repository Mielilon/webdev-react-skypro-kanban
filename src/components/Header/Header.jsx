import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";

export default function Header({ onCardAdd }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button
              className="header__btn-main-new _hover01"
              onClick={onCardAdd}
            >
              Создать новую задачу
            </button>
            <p onClick={togglePopup} className="header__user _hover02">
              Ivan Ivanov
            </p>
            {isOpen && <PopUser />}
          </nav>
        </div>
      </div>
    </header>
  );
}
