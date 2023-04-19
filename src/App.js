import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.clickHandle}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {

  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  
  //function here for calculation
  
  const total = () => props.good + props.bad + props.neutral
  const average = () => (props.good - props.bad)/ (props.good + props.bad + props.neutral)
  const positive = () => (props.good / (props.good + props.bad + props.neutral)) * 100

  if ((props.good + props.bad + props.neutral) === 0) {
    return (  
    <div>
      No Feedback Given
    </div>
    )
}

  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total()} />
      <StatisticLine text='average' value={average()} />
      <StatisticLine text='positive' value={`${positive()}%`} />
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandle={() => setGood(good + 1)} text='good' />
      <Button clickHandle={() => setNeutral(neutral + 1)} text='neutral' />
      <Button clickHandle={() => setBad(bad + 1)} text='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App