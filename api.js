const API_BASE_URL = 'https://6801f93681c7e9fbcc43e667.mockapi.io/'; // MockAPI dan olingan URL
const API_ENDPOINT = `${API_BASE_URL}/user`;

export const apiService = {
  // Barcha foydalanuvchilarni olish
  getUsers: async (searchTerm = '') => {
    try {
      const response = await fetch(API_ENDPOINT);
      const users = await response.json();
      
      if (searchTerm) {
        return users.filter(user => 
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return users;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Yangi foydalanuvchi qo'shish
  addUser: async (userData) => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Foydalanuvchini yangilash
  updateUser: async (id, userData) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Foydalanuvchini o'chirish
  deleteUser: async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};