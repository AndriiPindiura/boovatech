
const ADDLIST = 'boovatech/boovatech/ADDLIST';
const DELETELIST = 'boovatech/boovatech/DELETELIST';

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
    default: {
      return state;
    }
  }
}

export const addList = payload => {
  return { type: ADDLIST, payload };
};

export const deleteList = payload => {
  console.log(payload);
  return { type: DELETELIST, payload };
};
