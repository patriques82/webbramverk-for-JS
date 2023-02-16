
const Header = (props) => {
  return (
    <h1 className="title">{props.course}</h1>
  )
}

const Part = (props) => {
  const { part, ex } = props.part;
  return (
    <p>
      {part} {ex}
    </p>
  )
}
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => <Part key={index} part={part} />)}
    </>
  )
}

const Total = ({ excercises }) => {
  const total = excercises.reduce((a, b) => a + b);
  return (
    <p>Number of excercises {total}</p>
  )
}

const Course = ({ course }) => {
  return (
    <div className="course">
      <Header course={course.course} />
      <Content parts={course.parts} />
      <Total excercises={course.parts.map(part => part.excercises)} />
    </div>
  );
}


const App = () => {
  const courses = [
    {
      course: 'Half Stack application development',
      parts: [
        { part: 'Fundamentals of React', excercises: 10 },
        { part: 'Using props to pass data', excercises: 7 },
        { part: 'State of a component', excercises: 14 },
      ]
    },
    {
      course: 'Webbsäkerhet',
      parts: [
        { part: 'Hash', excercises: 1 },
        { part: 'Cookies', excercises: 7 },
        { part: 'Tokens', excercises: 8 },
      ]
    }
  ]

  return (
    <div>
      {courses.map((course, idx) => <Course key={idx} course={course} />)}
    </div>
  )
}

export default App;
