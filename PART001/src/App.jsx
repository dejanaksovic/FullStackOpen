const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

const Part = ({part}) => {
  return (
    <>
      <h2>{part.name}</h2>
      <p>{part.exercises}</p>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <Part part = { parts[0] } />
      <Part part = { parts[1] }/>
      <Part part = { parts[2] }/>
    </>
  )
}

const Total = ({ total }) => {
  return (
    <>
      <p>TOTAL NUMBER OF EXCERCISES = {total}</p>
    </>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      <Header title={ course.name } />
      <Content parts = { course.parts }/>
      <Total total={ course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises } />
    </div>
  )
}

export default App
