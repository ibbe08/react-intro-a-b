const Header = (props) => {
console.log(props)
  return (
    <div>
      <p> 
        {props.course}
        </p>
    </div>

  )
}

const  Content = (props) => {

  return (
    <div>
      <p> 
        {props.part1} {props.exercises1}
        {props.part2} {props.exercises2}
        {props.part3} {props.exercises3}

        </p>
    </div>

  )
}

const Total = (props) => {

  return (
    <div>
      <p> 
        Total {props.exercises1 + props.exercises2 + props.exercises3}

        </p>
    </div>

  )
}
  

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <p>{course}</p>
      <p>Content : {part1} - {exercises1}</p> 
        <p>Content : {part2} - {exercises2}</p>
        <p>Content : {part3} - {exercises3}</p>
        <p>Total {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

      
export default App
