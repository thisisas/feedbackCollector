import React, { useState } from 'react'

const History = (props) => {
  if(props.total === 0)
  return (
    <div>
      No feedback given!
    </div>
  )
  return (
    <div>
      <Statistics text = 'Good' name = {props.name1}/>
      <Statistics text = 'Neutral' name = {props.name2}/>
      <Statistics text = 'Bad' name = {props.name3}/>
      <Statistics text = 'Total' name = {props.name4}/>
      <Statistics text = 'Average' name = {props.name4/3}/>
      <Statistics text = 'Positive feedback' name = {props.name1*100/props.name4}/>
    </div>
  )
}
const Statistics = (props) =>{
  return (
    <div>
      {props.text} {props.name}
    </div>
  ) 
}
     
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setall] = useState(0)
  const handlegoodClick = () => {
    setall(total+1)
    setGood(good + 1)
  }

  const handleneutralClick = () => {
    setall(total+1)
    setNeutral(neutral + 1)
  }

  const handlebadClick = () => {
    setall(total+1)
    setBad(bad+1)
  }
  return (
    <div className="page">
      <div><h1>Give feedback!</h1></div>
      <div><br></br></div>
      <Button handleClick={handlegoodClick} text='Good' />
      <Button handleClick={handleneutralClick} text='Neutral' />
      <Button handleClick={handlebadClick} text='Bad'/>
      <br></br>
      <h2>Statistics</h2>
     <History total = {total} text = 'Good' name1 = {good} name2 = {neutral} name3 = {bad} name4 = {total}  />
    </div>
  )
  }

//reusable button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App