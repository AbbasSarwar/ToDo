const Tasks = JSON.parse(localStorage.getItem('list')) || [];
const input = document.querySelector('.inp');
const Add = () => {
  const create = {
    description: input.value,
    completed: false,
    index: Tasks.length + 1,
  };
  if (create.description !== '') {
    Tasks.push(create);
  }
  localStorage.setItem('list', JSON.stringify(Tasks));
};
export default Add;

const Remove = (index) => {
  Tasks.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(Tasks));
};
export { Remove };