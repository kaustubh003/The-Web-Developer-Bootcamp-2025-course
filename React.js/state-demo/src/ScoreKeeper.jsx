import { useState } from "react";

export default function ScoreKeeper({ numPlayers, target }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  const addOne = (index) => {
    setScores((prevScores) => {
      const copy = [...prevScores];
      copy[index] += 1;
      return copy;
      // return prevScores.map((score, idx) => {
      //   if (index === idx) return score + 1;
      //   else return score;
      // });
    });
  };

  const resetAll = () => {
    setScores(() => {
      return new Array(numPlayers).fill(0);
    });
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((s, index) => (
          <li key={index}>
            <p>
              Player{index + 1}: {s}
              <button onClick={() => addOne(index)}>+1</button>
              {s >= target && <span>Winner!</span>}
            </p>
          </li>
        ))}
      </ul>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
}
