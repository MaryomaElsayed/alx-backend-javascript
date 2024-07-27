export default function taskBlock(trueOrFalse) {
  const defaultTask = false;
  const defaultTask2 = true;

  let task = defaultTask;
  let task2 = defaultTask2;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
