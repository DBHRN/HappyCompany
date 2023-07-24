import { useTasks } from "../../context/TasksContext";
import { Button, ButtonLink, Card } from "../ui";
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
export function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const taskUsed = task;
  taskUsed.propTypes = {
    task: PropTypes.object.isRequired,
  };

  return (
    <Card>
      <header className="bg-[#e9e8e8] flex justify-between rounded-md break-words p-2 ">
        <h1 className="text-2xl font-bold">{taskUsed.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(taskUsed._id)}>Eliminar</Button>
          <ButtonLink to={`/tasks/${taskUsed._id}`}>Editar</ButtonLink>
        </div>
      </header>
      <p className="text-[#3b3b3b]">{taskUsed.description}</p>
      {/* format date */}
      <p>
        {taskUsed.date &&
          new Date(taskUsed.date).toLocaleDateString("es-MX", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
