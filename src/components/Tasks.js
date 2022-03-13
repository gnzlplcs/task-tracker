const tasks = [
  {
    id: 1,
    text: 'Sacar a Wanda',
    day: 'Mar 15th at 9.00pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Lavar los platos',
    day: 'Mar 15th at 9.00pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Comprar alimentos',
    day: 'Mar 15th at 9.00pm',
    reminder: true
  }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id  }>{task.text}</h3>))}
    </>
  )
}

export default Tasks