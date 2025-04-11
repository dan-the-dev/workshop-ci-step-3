import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

interface MyPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: MyPageProps) {
  const showPriority = Number(searchParams['show_priority']) === 1 ? true : false;
  const tasks = await getAllTodos();

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App {showPriority}</h1>
        <AddTask/>
      </div>
      <TodoList showPriority={showPriority} tasks={tasks} />
    </main>
  );
}
