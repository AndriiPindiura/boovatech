
const ADDLIST = 'boovatech/boovatech/ADDLIST';
const DELETELIST = 'boovatech/boovatech/DELETELIST';
const COMPLETELIST = 'boovatech/boovatech/COMPLETELIST';
const SELECTLIST = 'boovatech/boovatech/SELECTLIST';
const ADDITEM = 'boovatech/boovatech/ADDITEM';
const DELETEITEM = 'boovatech/boovatech/DELETEITEM';
const CHANGEITEM = 'boovatech/boovatech/CHANGEITEM';
const COMPLETEITEM = 'boovatech/boovatech/COMPLETEITEM';
const ADDSHOPPINGITEM = 'boovatech/boovatech/ADDSHOPPINGITEM';
const DESELECTLIST = 'boovatech/boovatech/DESELECTLIST';
const SAVELIST = 'boovatech/boovatech/SAVELIST';

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

const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(36)
      .substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADDLIST: {
      return Object.assign({}, state, { shoppingList: {} });
    }
    case ADDSHOPPINGITEM: {
      const active = {
        add: (action.payload.trim().length > 0),
        save: state.active && state.active.save
      };
      return Object.assign({}, state, {
        itemToAdd: action.payload,
        active
      });
    }
    case ADDITEM: {
      console.log(action.payload);
      console.log(state.shoppingList);
      const shoppingList = Object.assign({}, state.shoppingList);
      if (!(shoppingList.shoppingList && shoppingList.shoppingList.slice)) {
        shoppingList.shoppingList = [];
      }
      shoppingList.shoppingList.push({ id: guid(), description: state.itemToAdd, complete: false });
      const active = {
        add: false,
        save: true
      };

      return Object.assign({}, state, { shoppingList, itemToAdd: null, active });
    }
    case DELETEITEM: {
      const shoppingList = Object.assign({}, state.shoppingList);
      shoppingList.shoppingList = [...shoppingList.shoppingList].filter(item => item.id !== action.payload);
      const active = {
        add: false,
        save: (shoppingList.shoppingList.length > 0)
      };
      return Object.assign({}, state, { shoppingList, active });
    }
    case CHANGEITEM: {
      console.log(action.payload);
      const shoppingList = Object.assign({}, state.shoppingList);
      for (let i = 0, l = shoppingList.shoppingList.length; i < l; i++) {
        if (shoppingList.shoppingList[i].id === action.payload.id) {
          shoppingList.shoppingList[i].description = action.payload.description;
        }
      }
      return Object.assign({}, state, { shoppingList });
    }
    case COMPLETEITEM: {
      console.log(action.payload);
      const shoppingList = Object.assign({}, state.shoppingList);
      for (let i = 0, l = shoppingList.shoppingList.length; i < l; i++) {
        if (shoppingList.shoppingList[i].id === action.payload) {
          shoppingList.shoppingList[i].complete = !shoppingList.shoppingList[i].complete;
        }
      }
      return Object.assign({}, state, { shoppingList });
    }
    case DELETELIST: {
      const history = [...state.history].filter(item => item.id !== action.payload);
      return Object.assign({}, state, { history });
    }
    case SELECTLIST: {
      const shoppingList = [...state.history].filter(item => item.id === action.payload)[0];
      return Object.assign({}, state, { shoppingList });
    }
    case DESELECTLIST: {
      return Object.assign({}, state, { shoppingList: null });
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
    case SAVELIST: {
      const history = [...state.history];
      const shoppingList = Object.assign({}, state.shoppingList);
      if (!shoppingList.user) {
        shoppingList.user = action.payload.user;
        shoppingList.id = guid();
        shoppingList.date = (new Date()).getDateString();
        history.push(shoppingList);
      } else {
        for (let i = 0, l = history.length; i < l; i++) {
          if (history[i].id === shoppingList.id) {
            history[i] = shoppingList;
          }
        }
      }
      return Object.assign({}, state, { history, shoppingList: null });
    }
    default: {
      return state;
    }
  }
}

export const addList = () => {
  return { type: ADDLIST };
};

export const deleteList = payload => {
  return { type: DELETELIST, payload };
};

export const completeList = payload => {
  return { type: COMPLETELIST, payload };
};

export const selectList = payload => {
  return { type: SELECTLIST, payload };
};

export const deselectList = () => {
  return { type: DESELECTLIST };
};

export const addItem = () => {
  return { type: ADDITEM };
};

const addShoppingItemAc = payload => {
  return { type: ADDSHOPPINGITEM, payload };
};

export const addShoppingItem = payload => {
  return dispatch => {
    if (payload.keyCode === 13) {
      dispatch(addItem());
    } else {
      dispatch(addShoppingItemAc(payload.target.value));
    }
  };
};

export const deleteItem = payload => {
  return { type: DELETEITEM, payload };
};

export const changeItem = payload => {
  return { type: CHANGEITEM, payload };
};

export const completeItem = payload => {
  return { type: COMPLETEITEM, payload };
};

export const saveList = payload => {
  console.log(payload);
  return { type: SAVELIST, payload };
};
