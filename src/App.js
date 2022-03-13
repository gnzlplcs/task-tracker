import { useState } from "react";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [ tasks, setTasks ] = useState([
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
  ]);

  // delete function
  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
