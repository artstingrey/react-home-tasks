import { initialTodoList } from "../constant/constant";

export const checkLocalStorage = (name) => {
  const isFilled = localStorage.getItem(name);
  if (isFilled) return JSON.parse(isFilled);
  else {
    return false;
  }
};

export const setLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const checkSessionStorage = (name) => {
  const isFilled = sessionStorage.getItem(name);
  if (isFilled) return JSON.parse(isFilled);
  else {
    return false;
  }
};

export const setSessiontorage = (name, data) => {
  sessionStorage.setItem(name, JSON.stringify(data));
};
