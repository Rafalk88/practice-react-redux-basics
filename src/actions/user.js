export const addUserAction = username => {
  return {
      type: 'ADD_USER',
      payload: { username }
  }
}

export const deleteUserAction = id => {
  return {
      type: 'DELETE_USER',
      payload: { id }
  }
}

export const deleteAllUsers = () => {
  return {
    type: 'DELETE_ALL_USERS',
  }
}
