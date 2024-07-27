export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Declare new variables with different names to avoid re-declaration
    const newTask = true;
    const newTask2 = false;
    return [newTask, newTask2];
  }

  return [task, task2];
}
