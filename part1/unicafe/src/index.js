import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, value }) => <button onClick={value}> {text} </button>

const Statistic = ({ text, value }) => <tr><td>{text}</td> <td  >{value}</td></tr>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);
  if(good === 0 && neutral === 0 && bad === 0) {
    return(
      <div>
        <h3>give feedback</h3>
          <Button text="good" value={handleGood} />
          <Button text="neutral" value={handleNeutral} />
          <Button text="bad" value={handleBad} />
        <h3>statistics</h3>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h3>give feedback</h3>
      <Button text="good" value={handleGood} />
      <Button text="neutral" value={handleNeutral} />
      <Button text="bad" value={handleBad} />
      <h3>statistics</h3>
      <table>
        <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="all" value={good + neutral + bad}/>
          <Statistic text="average" value={(good - bad) / (good + neutral + bad)}/>
          <Statistic text="positive" value={(good * 100) / (good + neutral + bad) + "%"}/>
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
