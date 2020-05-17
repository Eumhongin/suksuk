export const updateName = (str) => {
  return {
    type: 'UPDATE/NAME',
    payload: str
  }
}
export const updateEmail = (str) => {
  return {
    type: 'UPDATE/EMAIL',
    payload: str
  }
}
export const updatePassword = (str) => {
  return {
    type: 'UPDATE/PASSWORD',
    payload: str
  }
}
export const updatePasswordConfirm = (str) => {
  return {
    type: 'UPDATE/PASSWORDCONFIRM',
    payload: str
  }
}