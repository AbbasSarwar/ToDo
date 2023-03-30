let Tasks = JSON.parse(localStorage.getItem('list')) || [];
function check(e) {
  if (e.target.classList.contains('check')) {
    e.target.nextElementSibling.classList.toggle('line');
  }
}

export { check };
const UpdateCheck = (e) => {
  if (e.target.checked) {
    const ind = e.target.getAttribute('data-com');
    Tasks[ind].completed = true;
  } else {
    const ind = e.target.getAttribute('data-com');
    Tasks[ind].completed = false;
  }
  localStorage.setItem('list', JSON.stringify(Tasks));
};
export { UpdateCheck };
const DeleteAll = () => {
  const Incomplete = Tasks.filter((task) => !task.completed);
  Tasks = Incomplete;
  localStorage.setItem('list', JSON.stringify(Tasks));
  window.location.reload();
};
export { DeleteAll };