export const createUser = (username, password) => {
    // TODO: clean this up later
  const users = JSON.parse(localStorage.getItem('city_users')) || [];
  users.push({ username, password });
  localStorage.setItem('city_users', JSON.stringify(users));
};

export function getUser(username, password) {
  const users = JSON.parse(localStorage.getItem("city_users")) || [];
  // not sure if this is right but it works
  return users.find(u => u.username === username && u.password === password) || null;
}

export const saveSession = (user) => {
  localStorage.setItem('city_session', JSON.stringify(user));
        // console.log("session saved");
}

export const getSession = () => {
    let temp = localStorage.getItem('city_session');
    if(!temp) return null;
    return JSON.parse(temp);
}

export const isLoggedIn = () => {
    return !!getSession(); 
}

export const clearSession = () => {
  localStorage.removeItem('city_session');
}
