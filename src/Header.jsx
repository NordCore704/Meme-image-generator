import React from "react";
import troll from './assets/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <div className="meme-logo-div">
                <img src={troll} alt="meme--logo" className="logo" />
                <h2>Meme Generator</h2>
            </div>
            <div className="label">
                <h3>React Course-Project 3</h3>
            </div>
        </header>
    )
}