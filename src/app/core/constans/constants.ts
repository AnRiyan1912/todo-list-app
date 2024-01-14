export const constants = {
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const apiUrl = 'http://localhost:8000';

export const apiEndPoint = {
  AuthEndPoint: {
    login: `${apiUrl}/login`,
    logout: `${apiUrl}/logout`,
    loggedUser: `${apiUrl}/user`,
  },

  TodoEndPoing: {
    getAllTodo: `${apiUrl}/todo`,
    addTodo: `${apiUrl}/todo`,
    updateTodo: `${apiUrl}/todo`,
  },
};
