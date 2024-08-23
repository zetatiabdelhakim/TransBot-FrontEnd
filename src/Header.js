import React from 'react';
import logo from "./imgs/TransBot.svg";
import oncf from "./imgs/oncf.jpg";
import "./styles/Header.css"
export default function Header() {
  return (
    <header>
        <img class="logo" src={logo} alt=""/>
        <a href="https://www.oncf-voyages.ma/"><img class="oncf" src={oncf} alt=""/></a>
    </header>
  );
}
