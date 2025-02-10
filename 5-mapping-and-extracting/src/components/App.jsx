import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipidia";
import newEmojipedia from "./substring";


// Extracting the compnents
// function createEntry(emojiTerm) {
//     return (
//         <Entry
//         key={emojiTerm.id}
//         emoji={emojiTerm.emoji}
//         name={emojiTerm.name}
//         meaning={emojiTerm.meaning}
//         />
//     );
// }

function App() {
      // checking for substring methods 
      console.log(newEmojipedia)

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        <dl className="dictionary">

        {
            // Map over the emojipedia array and create Entry components for each emoji term
            emojipedia.map(emojiTerm => {
                return (
                    <Entry
                    key={emojiTerm.id}
                    emoji={emojiTerm.emoji}
                    name={emojiTerm.name}
                    meaning={emojiTerm.meaning}
                    />
                );
            })
        }
        </dl>

    
    </div>  );
}

export default App;
