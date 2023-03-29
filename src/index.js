import Add, { Remove } from './modules/funtions.js';

const Container = document.getElementById('addtodo');
const input = document.querySelector('.inp');
const Tasks = JSON.parse(localStorage.getItem('list')) || [];
const Display = () => {
  Tasks.forEach((list, index) => {
    Container.innerHTML += `<li class="li-list" ><input class="li-list" type="checkbox" data-com="${list.completed}"> <p contenteditable="true" class="paragraph" data-para="${index}">${list.description}</p><i class="fa-regular fa-trash-can" data-index="${index}"></i> <i class="li-list fa-solid fa-ellipsis-vertical"></i></li>`;// eslint-disable-line no-return-assign
  });
};

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    Add();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});
const listItemsContainer = document.querySelector('#addtodo');
const liLists = document.getElementsByClassName('li-list');
listItemsContainer.addEventListener('click', (e) => {
  for (let i = 0; i < liLists.length; i += 1) {
    liLists[i].classList.remove('active');
  }
  if (e.target.classList.contains('li-list')) {
    e.target.classList.toggle('active');
  } else if (e.target.classList.contains('paragraph')) {
    e.target.parentElement.classList.toggle('active');
  }
});

listItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    const index = e.target.getAttribute('data-index');
    Remove(index);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});
const update = () => {
  for (let i = 0; i < Tasks.length; i += 1) {
    Tasks[i].index = i;
  }
  localStorage.setItem('list', JSON.stringify(Tasks));
  Display();
};
update();
listItemsContainer.addEventListener('keypress', (e) => {
  if (e.target.classList.contains('paragraph')) {
    if (e.key === 'Enter') {
      if (e.target.textContent === '') {
        return false;
      }
      const num = e.target.getAttribute('data-para');
      Tasks[num].description = e.target.textContent;
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }
  return localStorage.setItem('list', JSON.stringify(Tasks));
});