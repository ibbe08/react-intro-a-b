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
        {props.parts} {props.exercises}
        
        </p>
    </div>

  )
}

const  exercises = (props) => {

  return (
    <div>
      <p> 
        {props.exercises}
        {props.exercises}
        {props.exercises}

        </p>
    </div>

  )
}

const Total = (props) => {

  return (
    <div>
      <p> 
        Total {props.exercises + props.exercises + props.exercises}

        </p>
    </div>

  )
}
  

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
    ]
  }

  return (
    <div>
      <p>{course.name} {course.parts.length} parts</p>
      <p >Content : {course.parts[0].name} - {course.parts[0].exercises}</p> 
      <p>Content : {course.parts[1].name} - {course.parts[1].exercises}</p>
      <p>Content : {course.parts[2].name} - {course.parts[2].exercises}</p>
        <p>Total {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

      
export default App
