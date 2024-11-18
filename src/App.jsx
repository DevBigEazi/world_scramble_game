import { useState } from "react";
import { scrambleWord, getRandomWord } from "./utils/utils";

function App() {
  // hooks
  const [originalWord, setOriginalWord] = useState(getRandomWord());
  const [scrambledWord, setScrambledWord] = useState(
    scrambleWord(originalWord)
  );
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");

  //   console.log(scrambleWord("frontend"));

  const handleInputValueChange = (e) => setInputValue(e.target.value);

  // handle guess function logic
  const handleGuess = () => {
    if (inputValue.toLowerCase() === originalWord.toLowerCase()) {
      setFeedback("Correct! 🍾");

      const newWord = getRandomWord();

      setOriginalWord(newWord);

      setScrambledWord(scrambleWord(newWord));

      setInputValue("");
    } else {
      setFeedback("Try again! ❌");
    }
  };

  return (
    <main>
      <div >
        <h1>Scrambled Word Game</h1>
        <h2>Guess this scramled world: <span>{scrambledWord}</span></h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
          placeholder="Your guess"
        />
        <button onClick={handleGuess}>Submit</button>
        <p>{feedback}</p>
      </div>
    </main>
  );
}

export default App;
