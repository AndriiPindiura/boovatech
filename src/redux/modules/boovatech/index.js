
const ADDLIST = 'boovatech/boovatech/ADDLIST';
const DELETELIST = 'boovatech/boovatech/DELETELIST';
const COMPLETELIST = 'boovatech/boovatech/COMPLETELIST';

const initialState = {
  history: [
    {
      id: 0,
      user: 'aydnep',
      shoppingList: [],
      date: '2016/10/20',
      complete: false,
    },
    {
      id: 1,
      user: 'aydnep',
      shoppingList: [],
      date: '2016/10/19',
      complete: false,
    },
    {
      id: 2,
      user: 'aydnep',
      shoppingList: [],
      date: '2016/10/18',
      complete: false,
    },
    {
      id: 3,
      user: 'aydnep',
      shoppingList: [],
      date: '2016/10/17',
      complete: false,
    },
  ],
  shoppingList: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETELIST: {
      const history = [...state.history].filter(item => item.id !== action.payload);
      return Object.assign({}, state, { history });
    }
    case COMPLETELIST: {
      const history = [...state.history];
      for (let i = 0, l = history.length; i < l; i++) {
        if (history[i].id === action.payload.id) {
          history[i].complete = !action.payload.complete;
        }
      }
      return Object.assign({}, state, { history });
    }
    default: {
      return state;
    }
  }
}

export const addList = payload => {
  return { type: ADDLIST, payload };
};

export const deleteList = payload => {
  return { type: DELETELIST, payload };
};

export const completeList = payload => {
  return { type: COMPLETELIST, payload };
};
