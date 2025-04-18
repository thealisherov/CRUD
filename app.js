import { apiService } from './api.js'; // to'g'ri yo'l bo'lishi kerak

const ism = document.getElementById('ism');
const yosh = document.getElementById('yosh');
const shahar = document.getElementById('shahr');
const kasb = document.getElementById('kasb');
const hobby = document.getElementById('hobby');
const addBtn = document.getElementById('add');
const dataContainer = document.querySelector('.data');

// Forma submit'ni to'xtatish va APIga yuborish
addBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const user = {
    name: ism.value,
    age: yosh.value,
    city: shahar.value,
    job: kasb.value,
    hobby: hobby.value
  };

  try {
    await apiService.addUser(user);
    clearInputs();
    loadUsers(); // foydalanuvchilarni qaytadan yuklash
  } catch (error) {
    console.error("Qo'shishda xatolik:", error);
  }
});


async function loadUsers() {
  try {
    const users = await apiService.getUsers();
    renderUsers(users);
  } catch (error) {
    console.error("Yuklashda xatolik:", error);
  }
}

function renderUsers(users) {
  dataContainer.innerHTML = ''; 

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-card';
    userDiv.innerHTML = `
      <p class="data-p"> ${user.name}</p>
      <p class="data-p"> ${user.age}</p>
      <p class="data-p"> ${user.city}</p>
      <p class="data-p"> ${user.job}</p>
      <p class="data-p"> ${user.hobby}</p>
    `;
    dataContainer.appendChild(userDiv);
  });
}

function clearInputs() {
  ism.value = '';
  yosh.value = '';
  shahar.value = 'Samarqand';
  kasb.value = '';
  hobby.value = '';
}


loadUsers();
