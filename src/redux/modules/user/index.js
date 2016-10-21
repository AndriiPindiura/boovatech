import { deselectList } from '../boovatech';

const ADDUSER = 'boovatech/user/ADDUSER';
const SIGNIN = 'boovatech/user/SIGNIN';
const SIGNUP = 'boovatech/user/SIGNUP';
const LOGIN = 'boovatech/user/LOGIN';
const REGISTER = 'boovatech/user/REGISTER';
const CLOSE = 'boovatech/user/CLOSE';

const initialState = {
  users: [
    'aydnep',
    'Andrii Pindiura',
    'Renata Pindiura',
    'Anna Cherniakhivska'
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNIN: {
      return Object.assign({}, state, { signin: true, signup: false });
    }
    case CLOSE: {
      return Object.assign({}, state, { signin: false, signup: false });
    }
    case SIGNUP: {
      return Object.assign({}, state, { signin: false, signup: true });
    }
    case LOGIN: {
      return Object.assign({}, state, { signin: false, signup: false, user: action.payload });
    }
    case REGISTER: {
      const users = [...state.users];
      users.push(action.payload);
      return Object.assign({}, state, { users, signin: false, signup: false, user: action.payload });
    }
    default: {
      return state;
    }
  }
}

export const addUser = payload => {
  return { type: ADDUSER, payload };
};

export const close = () => {
  return { type: CLOSE };
};

const loginAc = payload => {
  return { type: LOGIN, payload };
};

export const login = payload => {
  return (dispatch) => {
    dispatch(deselectList());
    dispatch(loginAc(payload.target.value));
  };
};

const registerAc = payload => {
  return { type: REGISTER, payload };
};

export const registerUser = payload => {
  return dispatch => {
    if (payload.keyCode === 13) {
      dispatch(deselectList());
      dispatch(registerAc(payload.target.value));
    }
  };
};

export const signIn = () => {
  return { type: SIGNIN };
};

export const signUp = () => {
  return { type: SIGNUP };
};
