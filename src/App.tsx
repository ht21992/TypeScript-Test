import "./App.css";
import Table from "./components/Table";
import Menu from "./components/Menu";
import Input from "./components/Input";
import { TaskProps } from "./components/Task";
import { useState } from "react";


function App() {
  const fetchedTasks: Array<TaskProps> = [
    { status: "Failed", title: "Zemlak, Daniel and Leannon" },
    { status: "In Progress", title: "Carroll Group" },
    { status: "To Do", title: "Rowe-Schoen" },
    { status: "Done", title: "Wyman-Ledner" },
  ];

  const [tasks, setTasks] = useState<Array<TaskProps>>(fetchedTasks);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // Update input value

    if (value) {
      // Filter tasks based on input value
      const filteredTasks = fetchedTasks.filter((task) =>
        task.title.toLowerCase().includes(value.toLowerCase())
      );
      setTasks(filteredTasks);
    } else {
      // Reset tasks when input is cleared
      setTasks(fetchedTasks);
    }
  };

  return (
    <>
      <Menu modalType="new task" setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <label className="input input-bordered flex items-center gap-2 my-4">
        <Input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleSearchInputChange}
          className="grow"
        />
      </label>
      {tasks.length ? <Table tasks={tasks} /> : <>No Task</>}

    </>
  );
}

export default App;
