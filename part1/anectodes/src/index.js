import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, value}) => {
  return(
      <button onClick={value}>{name}</button>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))

  const incVotes = () => {
    const copy = [...votes]
    copy[selected] += 1;
    setVotes(copy)
  }

  const nextAnectode = () => setSelected(Math.floor(Math.random() * 6))
  let max = Number.MIN_VALUE;
  let maxIndex = 0;
  for(let i= 0; i < votes.length; i++) {
    if(max < votes[i]) {
      max = votes[i];
      maxIndex = i;
    }
  };
  return (
    <div>
      <h3> Anectode of the day</h3>
      {props.anecdotes[selected]} has {votes[selected]} votes
      <div>
        <Button name = "vote" value={incVotes}/>
        <Button name = "next anectode" value={nextAnectode}/>
      </div>
      <h3>Anectode with most votes</h3>
      {props.anecdotes[maxIndex]} has {votes[maxIndex]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
