export const validateEmail = (emailAdress) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) return true;
  else return false;
};
export const validatePassword = (password) => {
  let regex = /^.{8,}$/;
  if (password.match(regex)) return true;
  else return false;
};

export const replaceAll = (str, replaceStr, replaceWith) => {
  return str.split(replaceStr).join(replaceWith);
};

export const selectionFilter = (data, filterString) => {
  return data.filter((item) => item.genres[0] === filterString);
};
