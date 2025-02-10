import React from "react";
import emojipedia from "./emojipidia";


const newEmojipedia= emojipedia.map(function(emoji){
    return emoji.meaning.substring(0,100);
});


export default newEmojipedia;