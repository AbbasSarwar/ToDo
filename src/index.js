const Container = document.getElementById('addtodo');

const Task = [
  {
    description: 'Cat is walking',
    completed: true,
    index: 0,
  },
  {
    description: 'Books are there',
    completed: true,
    index: 1,
  },
  {
    description: 'Welcome the homies',
    completed: true,
    index: 2,
  },
];
const Display = () => {
  Task.map((t) => Container.innerHTML += `<li key= ${t.index}><span><input type="checkbox" data-com="${t.completed}"> ${t.description}</span> <i class="fa-solid fa-ellipsis-vertical"></i></li>`);// eslint-disable-line no-return-assign
};
Display();