// /* eslint-disable no-shadow */
// export default function taskBlock(trueOrFalse) {
//   const task = false;
//   const task2 = true;

//   if (trueOrFalse) {
//     // eslint-disable-next-line no-shadow
//     const task = true;
//     // eslint-disable-next-line no-shadow
//     const task2 = false;
//   }

//   return [task, task2];
// }
// /* eslint-enable no-shadow */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
