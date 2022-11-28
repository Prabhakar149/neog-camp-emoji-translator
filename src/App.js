import "./styles.css";
import { useState } from "react";

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");

  const emojis = {
    "🎅": "Christmas",
    "🤣": "Rolling on the Floor Laughing",
    "😉": "Winking Face",
    "🤑": "Money-Mouth Face",
    "😶": "Face Without Mouth",
    "🐯": "Tiger Face",
    "🍕": "Pizza",
    "📢": "Loudspeaker",
    "🚭": "No Smoking"
  };

  var knownEmojis = Object.keys(emojis);
  // console.log(knownEmojis);

  function emojiInputHandle(event) {
    var myEmoji = event.target.value;
    var meaning = emojis[myEmoji];
    if (myEmoji in emojis) {
      setEmojiMeaning(meaning);
    } else {
      setEmojiMeaning("we didn't find ");
    }
  }

  function emojiClickHandle(emoji) {
    // console.log("emoji clicked");
    var meaning = emojis[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>search your emoji</h1>
      <input
        style={{ width: "70%", height: "2rem" }}
        onChange={emojiInputHandle}
      ></input>
      <h3>{emojiMeaning}</h3>
      <h2>emojis we know</h2>
      {knownEmojis.map((emoji) => {
        return (
          <span
            key={emoji}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "1rem" }}
            onClick={() => emojiClickHandle(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
