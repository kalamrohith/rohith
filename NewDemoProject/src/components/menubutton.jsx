import { useState } from "react";
import "./menubutton.css";
import { Link } from "react-router-dom";

function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰ Menu
      </button>
      {open && (
        <ul className="menu-dropdown">
          <Link to="/profile"><li>Profile</li></Link> 
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Add more items here if needed */}
        </ul>
      )}
    </div>
  );
}

export default MenuButton;
