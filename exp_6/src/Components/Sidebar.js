import { useState } from "react";

export default function Sidebar({ setSelectedSection }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setSelectedSection("Home")}><h2>Home</h2></li>
        <li onClick={() => setSelectedSection("About")}><h2>About Me</h2></li>
        <li onClick={() => setSelectedSection("Contact")}><h2>Contact</h2></li>
      </ul>
    </div>
  );
}