"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import UpsertTaskModal from "./UpsertTaskModal";
import { TaskPriority } from "@/types/tasks";

interface AddTaskProps {
  showPriority: boolean;
}

const AddTask: React.FC<AddTaskProps> = ({ showPriority }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const [newPriorityValue, setNewPriorityValue] = useState<TaskPriority|null>(null);

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
      ...((showPriority && newPriorityValue !== null) ? { priority: newPriorityValue } : {}),
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        data-testid="add-todo"
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Add new task <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <UpsertTaskModal 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen}
        handleSubmit={handleSubmitNewTodo}
        value={newTaskValue}
        setValue={setNewTaskValue}
        showPriority={showPriority}
        setPriority={setNewPriorityValue}
      />
    </div>
  );
};

export default AddTask;
