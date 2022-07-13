

// selectors

export const getFirstName = ({ userData }) => userData.firstName;
export const getEmail = ({ userData }) => userData.email;

// actions
const createActionName = actionName => `app/userData/${actionName}`;
const ADD_USER_DATA = createActionName('ADD_USER_DATA');

// action creators
export const addUserData = payload => ({ type: ADD_USER_DATA, payload });


const userDataReducer = (statePart = {}, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      console.log(action.payload)
      return {...statePart, ...action.payload};
    default:
      return statePart;
  };
};

export default userDataReducer;