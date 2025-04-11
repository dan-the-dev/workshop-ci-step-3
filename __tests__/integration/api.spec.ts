import { addTodo, completeTodo, deleteTodo, editTodo, getAllTodos, uncompleteTodo } from '@/api';
import { TaskPriority } from '@/types/tasks';
import { expect, test} from '@jest/globals';

test('GET all TODOs', async () => {
  const actual = await getAllTodos();
  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "2",
      text: "Test 2",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: TaskPriority.LOW
    }
  ]);
});

test('add a TODO', async () => {
  await addTodo({
    id: "4",
    text: "Test 4"
  });
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "2",
      text: "Test 2",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: TaskPriority.LOW
    }
  ]);
});

test('edit a TODO', async () => {
  await editTodo({
    id: "2",
    text: "Test 2 edited",
    priority: TaskPriority.HIGH
  });
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "2",
      text: "Test 2 edited",
      done: false,
      priority: TaskPriority.HIGH
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: TaskPriority.LOW
    }
  ]);
});

test('delete a TODO', async () => {

  await deleteTodo('2');
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: TaskPriority.LOW
    }
  ]);
});

test('complete a TODO', async () => {
  await completeTodo("3");
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "3",
      text: "Test 3",
      done: true,
      priority: TaskPriority.LOW
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: TaskPriority.LOW
    }
  ]);
});

test('uncomplete a TODO', async () => {
  await uncompleteTodo("3");
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: TaskPriority.LOW
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: TaskPriority.LOW
    }
  ]);
});