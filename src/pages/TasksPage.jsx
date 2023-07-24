import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { ImFileEmpty } from "react-icons/im";
import title from "../components/ui/title";
import { Link } from "react-router-dom";

export default function TasksPage() {
  const { tasks, getTasks } = useTasks();
  title("My Account");
  useEffect(() => {
    getTasks();
  }, []);

  return (
    
    <>
    <h1 className="text-4xl font-bold mb-5 px-10 py-3 mt-10 inline-block ">Mis tareas</h1>
    <Link to="/add-task" ><button className="bg-[#888888] text-white px-4 py-2 rounded-md ml-5">
      Agregar tarea
    </button></Link>
      {tasks.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No tasks yet, please add a new task
            </h1>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center p-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      </div>
    </>
  );
}