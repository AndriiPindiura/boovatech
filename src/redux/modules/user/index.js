
const ADDUSER = 'boovatech/user/ADDUSER';
const SIGNIN = 'boovatech/user/SIGNIN';
const SIGNUP = 'boovatech/user/SIGNUP';

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
    case SIGNUP: {
      return Object.assign({}, state, { signin: false, signup: true });
    }
    default: {
      return state;
    }
  }
}

export const addUser = payload => {
  return { type: ADDUSER, payload };
};

export const signIn = () => {
  return { type: SIGNIN };
};

export const signUp = () => {
  return { type: SIGNUP };
};
