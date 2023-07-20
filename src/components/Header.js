import React from "react";
//* Images
import Logo from "../assets/MiNombre.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="https://www.instagram.com/agusandrada_1/">
            <img src={Logo} alt="" className="max-w-[150px]" />
          </a>
          {/* button */}
          <a href="mailto:agustinandrada1@gmail.com">
            <button className="btn btn-sm">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
