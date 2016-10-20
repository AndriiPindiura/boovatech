
const ADDLIST = 'boovatech/boovatech/ADDLIST';

const initialState = {
  listsCollection: [],
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
