import React, { useState, useEffect } from "react";
import memesData from "./memesData";
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])
  function getMemeImage() {
    const randomUrl = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomUrl].url;
    setMeme(prevMeme => ({
        ...prevMeme, randomImage: url
    }));
  }
  function handleChange(event) {
  
    const {name, value} = event.target
    setMeme(prevInput => ({
      ...prevInput, [name]: value
    }))
  }


  return (
    <section className="section">
      <div className="text--input-div">
        <input
         type="text" 
         placeholder="Top Text" 
         name="topText" 
         id="" 
         onChange={handleChange}
         value={meme.topText}
         className='top'
         />

        <input 
        type="text" 
        placeholder="Bottom Text" 
        name="bottomText" 
        id="" 
        onChange={handleChange}
        value={meme.bottomText}
        />
      </div>
      <button onClick={getMemeImage} className="generate-btn">
        Get a new meme image🖼️
      </button>
      <div className="meme--image-div">
        {meme.topText && <h2 className="meme-text-top">{meme.topText}</h2>}
        {meme.bottomText && <h2 className="meme-text-bottom">{meme.bottomText}</h2>}
        <img src={meme.randomImage} alt="" className="meme--image" />
      </div>
    </section>
  );
};
export default Meme;
