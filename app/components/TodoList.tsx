import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
  showPriority: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, showPriority }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            {showPriority && <th>Priority</th>}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} showPriority={showPriority}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
