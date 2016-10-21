
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
      shoppingList: [
        {id: 'npv2s6-qtz-qdo-n7w-48pelf1t8', description: 'Шторка в ванную', complete: true},
        {id: '9h7pvn-qpv-ieo-khz-2ensznhnr', description: 'Стеллаж', complete: true},
        {id: 'jkguzn-x4r-jt8-r07-fbleuj8m5', description: 'Банки для сахара', complete: true},
        {id: 'r4yeai-o8b-1kp-ruj-rlownibgp', description: 'Простынь Тате ', complete: true},
        {id: 'lcnvtp-4lp-76c-cqp-pa1twyian', description: 'Постель нам', complete: true}
      ],
      user: 'Andrii Pindiura',
      id: '7ysohg-m4f-q3g-4dg-880mhmgga',
      date: '2016/10/21'
    },
    {
      shoppingList: [
        {id: 'bh5vy8-rvj-5wr-zw1-r1vn67i6e', description: 'Полотенце нам', complete: false},
        {id: 'ozpku7-1yc-six-mgz-h6optixqd', description: 'Моющее мембрана', complete: true},
        {id: 'gv4fhs-e3n-tnm-m7k-su9ijlttq', description: 'Растворитель для плитки ', complete: false},
        {id: 'iz6pqg-ge2-sie-fa8-d9iti5gmg', description: 'Чайник ', complete: true},
        {id: '8ttvgh-1s4-26q-z68-mwpewaz77', description: 'Рюкзак мне', complete: true},
        {id: 'plf0n2-oo0-edl-oq4-1zlgukiy2', description: 'Сумка норм папе', complete: true},
        {id: '5dq5xf-lzr-z9g-qrm-rlln8losa', description: 'Очки мне', complete: false},
        {id: 'b16lrd-sth-7kh-4q2-m6teulohn', description: 'Горшок драцене', complete: false},
        {id: 'l5zhum-klo-wz9-j2p-760h1praf', description: 'Хлебопечка ', complete: true},
        {id: '62uhjh-rrj-iug-u8v-hm6yuzkjd', description: 'Машинка от окатышков', complete: true}
      ],
      user: 'Andrii Pindiura',
      id: 'xlgl3c-2my-qjr-d23-pnyyda0ob',
      date: '2016/10/20'
    },
    {
      shoppingList: [
        {id: 'wv2aks-5w3-vl8-qjg-cmlryqtf9', description: 'Кеды папе 2шт ', complete: false},
        {id: 'rizkji-otv-fot-urj-o4ss6ocwj', description: 'Зимние ботинки ', complete: true},
        {id: 'qg1o0c-s73-n16-6mt-ku5vsy2s0', description: 'Кроксы всем', complete: true},
        {id: '6xf6uv-p8m-wjn-sey-0b4cdut7y', description: 'Угольные стельки 2 пары ', complete: true},
        {id: 'f890sy-gwt-mpc-odu-xxel2kdtw', description: 'Спортивные штаны папе ', complete: true},
        {id: 'o14gey-m68-vpo-c7c-sc6v1oky9', description: 'Шорты папе', complete: true},
        {id: '93pfy0-b1v-bs7-zs2-ldv63t2a1', description: 'Футболки, поло папе ', complete: true},
        {id: '2v5kq5-sme-jvi-z3g-9bv2x41jg', description: 'Соломенная шляпка, ремень, танцевальный купальник, футболка в полоску Тате', complete: true},
        {id: 'mvrww1-1ot-t9g-i3c-zdboyqgq0', description: 'Купальник танцевальный ', complete: true},
        {id: '57npcp-k42-r8h-ecr-6jzklhfrx', description: 'Лосины на танцы ', complete: true},
        {id: 'jae4qu-g37-nos-suw-8s4kboq37', description: 'Чешки ', complete: false}
      ],
      user: 'Andrii Pindiura',
      id: 'wrhgd8-7lo-5u1-pbh-ve1qvbw6c',
      date: '2016/10/19'
    },
    {
      shoppingList: [
        {id: 'j4wcbq-oz2-5vb-grd-62plxef90', description: 'Варе ', complete: false},
        {id: 'w4yivf-ch3-iuu-i4f-pvharavu9', description: 'Юльке-Сереже', complete: false},
        {id: 'mbn42a-qe9-dzl-kpd-mkvnve3e5', description: 'Бабушке', complete: false},
        {id: 'kw0t3l-qjh-xlf-fji-2d9oegh5t', description: 'Папе', complete: false},
        {id: '4tykq6-gwr-lm6-ybj-fva721tuk', description: 'Луке', complete: false}
      ],
      user: 'Andrii Pindiura',
      id: 'geiij3-j6u-a9u-9vp-zcjqk3hcd',
      date: '2016/10/18'
    },
      {
      shoppingList: [
        {id: 'npv2s6-qtz-qdo-n7w-48pelf1t8', description: 'Шторка в ванную', complete: true},
        {id: '9h7pvn-qpv-ieo-khz-2ensznhnr', description: 'Стеллаж', complete: true},
        {id: 'jkguzn-x4r-jt8-r07-fbleuj8m5', description: 'Банки для сахара', complete: true},
        {id: 'r4yeai-o8b-1kp-ruj-rlownibgp', description: 'Простынь Тате ', complete: true},
        {id: 'lcnvtp-4lp-76c-cqp-pa1twyian', description: 'Постель нам', complete: true}
      ],
      user: 'aydnep',
      id: '7ysohg-m4f-q3g-4dg-880mhmggf',
      date: '2016/10/17'
    },
    {
      shoppingList: [
        {id: 'bh5vy8-rvj-5wr-zw1-r1vn67i6e', description: 'Полотенце нам', complete: false},
        {id: 'ozpku7-1yc-six-mgz-h6optixqd', description: 'Моющее мембрана', complete: true},
        {id: 'gv4fhs-e3n-tnm-m7k-su9ijlttq', description: 'Растворитель для плитки ', complete: false},
        {id: 'iz6pqg-ge2-sie-fa8-d9iti5gmg', description: 'Чайник ', complete: true},
        {id: '8ttvgh-1s4-26q-z68-mwpewaz77', description: 'Рюкзак мне', complete: true},
        {id: 'plf0n2-oo0-edl-oq4-1zlgukiy2', description: 'Сумка норм папе', complete: true},
        {id: '5dq5xf-lzr-z9g-qrm-rlln8losa', description: 'Очки мне', complete: false},
        {id: 'b16lrd-sth-7kh-4q2-m6teulohn', description: 'Горшок драцене', complete: false},
        {id: 'l5zhum-klo-wz9-j2p-760h1praf', description: 'Хлебопечка ', complete: true},
        {id: '62uhjh-rrj-iug-u8v-hm6yuzkjd', description: 'Машинка от окатышков', complete: true}
      ],
      user: 'aydnep',
      id: 'xlgl3c-2my-qjr-d23-pnyyda0og',
      date: '2016/10/16'
    },
    {
      shoppingList: [
        {id: 'wv2aks-5w3-vl8-qjg-cmlryqtf9', description: 'Кеды папе 2шт ', complete: false},
        {id: 'rizkji-otv-fot-urj-o4ss6ocwj', description: 'Зимние ботинки ', complete: true},
        {id: 'qg1o0c-s73-n16-6mt-ku5vsy2s0', description: 'Кроксы всем', complete: true},
        {id: '6xf6uv-p8m-wjn-sey-0b4cdut7y', description: 'Угольные стельки 2 пары ', complete: true},
        {id: 'f890sy-gwt-mpc-odu-xxel2kdtw', description: 'Спортивные штаны папе ', complete: true},
        {id: 'o14gey-m68-vpo-c7c-sc6v1oky9', description: 'Шорты папе', complete: true},
        {id: '93pfy0-b1v-bs7-zs2-ldv63t2a1', description: 'Футболки, поло папе ', complete: true},
        {id: '2v5kq5-sme-jvi-z3g-9bv2x41jg', description: 'Соломенная шляпка, ремень, танцевальный купальник, футболка в полоску Тате', complete: true},
        {id: 'mvrww1-1ot-t9g-i3c-zdboyqgq0', description: 'Купальник танцевальный ', complete: true},
        {id: '57npcp-k42-r8h-ecr-6jzklhfrx', description: 'Лосины на танцы ', complete: true},
        {id: 'jae4qu-g37-nos-suw-8s4kboq37', description: 'Чешки ', complete: false}
      ],
      user: 'aydnep',
      id: 'wrhgd8-7lo-5u1-pbh-ve1qvbw6h',
      date: '2016/10/15'
    },
    {
      shoppingList: [
        {id: 'j4wcbq-oz2-5vb-grd-62plxef90', description: 'Варе ', complete: false},
        {id: 'w4yivf-ch3-iuu-i4f-pvharavu9', description: 'Юльке-Сереже', complete: false},
        {id: 'mbn42a-qe9-dzl-kpd-mkvnve3e5', description: 'Бабушке', complete: false},
        {id: 'kw0t3l-qjh-xlf-fji-2d9oegh5t', description: 'Папе', complete: false},
        {id: '4tykq6-gwr-lm6-ybj-fva721tuk', description: 'Луке', complete: false}
      ],
      user: 'aydnep',
      id: 'geiij3-j6u-a9u-9vp-zcjqk3hci',
      date: '2016/10/14'
    },
      {
      shoppingList: [
        {id: 'npv2s6-qtz-qdo-n7w-48pelf1t8', description: 'Шторка в ванную', complete: true},
        {id: '9h7pvn-qpv-ieo-khz-2ensznhnr', description: 'Стеллаж', complete: true},
        {id: 'jkguzn-x4r-jt8-r07-fbleuj8m5', description: 'Банки для сахара', complete: true},
        {id: 'r4yeai-o8b-1kp-ruj-rlownibgp', description: 'Простынь Тате ', complete: true},
        {id: 'lcnvtp-4lp-76c-cqp-pa1twyian', description: 'Постель нам', complete: true}
      ],
      user: 'Renata Pindiura',
      id: '7ysohg-m4f-q3g-4dg-880mhmggj',
      date: '2016/10/13'
    },
    {
      shoppingList: [
        {id: 'bh5vy8-rvj-5wr-zw1-r1vn67i6e', description: 'Полотенце нам', complete: false},
        {id: 'ozpku7-1yc-six-mgz-h6optixqd', description: 'Моющее мембрана', complete: true},
        {id: 'gv4fhs-e3n-tnm-m7k-su9ijlttq', description: 'Растворитель для плитки ', complete: false},
        {id: 'iz6pqg-ge2-sie-fa8-d9iti5gmg', description: 'Чайник ', complete: true},
        {id: '8ttvgh-1s4-26q-z68-mwpewaz77', description: 'Рюкзак мне', complete: true},
        {id: 'plf0n2-oo0-edl-oq4-1zlgukiy2', description: 'Сумка норм папе', complete: true},
        {id: '5dq5xf-lzr-z9g-qrm-rlln8losa', description: 'Очки мне', complete: false},
        {id: 'b16lrd-sth-7kh-4q2-m6teulohn', description: 'Горшок драцене', complete: false},
        {id: 'l5zhum-klo-wz9-j2p-760h1praf', description: 'Хлебопечка ', complete: true},
        {id: '62uhjh-rrj-iug-u8v-hm6yuzkjd', description: 'Машинка от окатышков', complete: true}
      ],
      user: 'Renata Pindiura',
      id: 'xlgl3c-2my-qjr-d23-pnyyda0ok',
      date: '2016/10/12'
    },
    {
      shoppingList: [
        {id: 'wv2aks-5w3-vl8-qjg-cmlryqtf9', description: 'Кеды папе 2шт ', complete: false},
        {id: 'rizkji-otv-fot-urj-o4ss6ocwj', description: 'Зимние ботинки ', complete: true},
        {id: 'qg1o0c-s73-n16-6mt-ku5vsy2s0', description: 'Кроксы всем', complete: true},
        {id: '6xf6uv-p8m-wjn-sey-0b4cdut7y', description: 'Угольные стельки 2 пары ', complete: true},
        {id: 'f890sy-gwt-mpc-odu-xxel2kdtw', description: 'Спортивные штаны папе ', complete: true},
        {id: 'o14gey-m68-vpo-c7c-sc6v1oky9', description: 'Шорты папе', complete: true},
        {id: '93pfy0-b1v-bs7-zs2-ldv63t2a1', description: 'Футболки, поло папе ', complete: true},
        {id: '2v5kq5-sme-jvi-z3g-9bv2x41jg', description: 'Соломенная шляпка, ремень, танцевальный купальник, футболка в полоску Тате', complete: true},
        {id: 'mvrww1-1ot-t9g-i3c-zdboyqgq0', description: 'Купальник танцевальный ', complete: true},
        {id: '57npcp-k42-r8h-ecr-6jzklhfrx', description: 'Лосины на танцы ', complete: true},
        {id: 'jae4qu-g37-nos-suw-8s4kboq37', description: 'Чешки ', complete: false}
      ],
      user: 'Renata Pindiura',
      id: 'wrhgd8-7lo-5u1-pbh-ve1qvbw6l',
      date: '2016/10/11'
    },
    {
      shoppingList: [
        {id: 'j4wcbq-oz2-5vb-grd-62plxef90', description: 'Варе ', complete: false},
        {id: 'w4yivf-ch3-iuu-i4f-pvharavu9', description: 'Юльке-Сереже', complete: false},
        {id: 'mbn42a-qe9-dzl-kpd-mkvnve3e5', description: 'Бабушке', complete: false},
        {id: 'kw0t3l-qjh-xlf-fji-2d9oegh5t', description: 'Папе', complete: false},
        {id: '4tykq6-gwr-lm6-ybj-fva721tuk', description: 'Луке', complete: false}
      ],
      user: 'Renata Pindiura',
      id: 'geiij3-j6u-a9u-9vp-zcjqk3hcm',
      date: '2016/10/10'
    },
    {
      shoppingList: [
        {id: 'npv2s6-qtz-qdo-n7w-48pelf1t8', description: 'Шторка в ванную', complete: true},
        {id: '9h7pvn-qpv-ieo-khz-2ensznhnr', description: 'Стеллаж', complete: true},
        {id: 'jkguzn-x4r-jt8-r07-fbleuj8m5', description: 'Банки для сахара', complete: true},
        {id: 'r4yeai-o8b-1kp-ruj-rlownibgp', description: 'Простынь Тате ', complete: true},
        {id: 'lcnvtp-4lp-76c-cqp-pa1twyian', description: 'Постель нам', complete: true}
      ],
      user: 'Anna Cherniakhivska',
      id: '7ysohg-m4f-q3g-4dg-880mhmggo',
      date: '2016/10/09'
    },
    {
      shoppingList: [
        {id: 'bh5vy8-rvj-5wr-zw1-r1vn67i6e', description: 'Полотенце нам', complete: false},
        {id: 'ozpku7-1yc-six-mgz-h6optixqd', description: 'Моющее мембрана', complete: true},
        {id: 'gv4fhs-e3n-tnm-m7k-su9ijlttq', description: 'Растворитель для плитки ', complete: false},
        {id: 'iz6pqg-ge2-sie-fa8-d9iti5gmg', description: 'Чайник ', complete: true},
        {id: '8ttvgh-1s4-26q-z68-mwpewaz77', description: 'Рюкзак мне', complete: true},
        {id: 'plf0n2-oo0-edl-oq4-1zlgukiy2', description: 'Сумка норм папе', complete: true},
        {id: '5dq5xf-lzr-z9g-qrm-rlln8losa', description: 'Очки мне', complete: false},
        {id: 'b16lrd-sth-7kh-4q2-m6teulohn', description: 'Горшок драцене', complete: false},
        {id: 'l5zhum-klo-wz9-j2p-760h1praf', description: 'Хлебопечка ', complete: true},
        {id: '62uhjh-rrj-iug-u8v-hm6yuzkjd', description: 'Машинка от окатышков', complete: true}
      ],
      user: 'Anna Cherniakhivska',
      id: 'xlgl3c-2my-qjr-d23-pnyyda0op',
      date: '2016/10/08'
    },
    {
      shoppingList: [
        {id: 'wv2aks-5w3-vl8-qjg-cmlryqtf9', description: 'Кеды папе 2шт ', complete: false},
        {id: 'rizkji-otv-fot-urj-o4ss6ocwj', description: 'Зимние ботинки ', complete: true},
        {id: 'qg1o0c-s73-n16-6mt-ku5vsy2s0', description: 'Кроксы всем', complete: true},
        {id: '6xf6uv-p8m-wjn-sey-0b4cdut7y', description: 'Угольные стельки 2 пары ', complete: true},
        {id: 'f890sy-gwt-mpc-odu-xxel2kdtw', description: 'Спортивные штаны папе ', complete: true},
        {id: 'o14gey-m68-vpo-c7c-sc6v1oky9', description: 'Шорты папе', complete: true},
        {id: '93pfy0-b1v-bs7-zs2-ldv63t2a1', description: 'Футболки, поло папе ', complete: true},
        {id: '2v5kq5-sme-jvi-z3g-9bv2x41jg', description: 'Соломенная шляпка, ремень, танцевальный купальник, футболка в полоску Тате', complete: true},
        {id: 'mvrww1-1ot-t9g-i3c-zdboyqgq0', description: 'Купальник танцевальный ', complete: true},
        {id: '57npcp-k42-r8h-ecr-6jzklhfrx', description: 'Лосины на танцы ', complete: true},
        {id: 'jae4qu-g37-nos-suw-8s4kboq37', description: 'Чешки ', complete: false}
      ],
      user: 'Anna Cherniakhivska',
      id: 'wrhgd8-7lo-5u1-pbh-ve1qvbw6q',
      date: '2016/10/07'
    },
    {
      shoppingList: [
        {id: 'j4wcbq-oz2-5vb-grd-62plxef90', description: 'Варе ', complete: false},
        {id: 'w4yivf-ch3-iuu-i4f-pvharavu9', description: 'Юльке-Сереже', complete: false},
        {id: 'mbn42a-qe9-dzl-kpd-mkvnve3e5', description: 'Бабушке', complete: false},
        {id: 'kw0t3l-qjh-xlf-fji-2d9oegh5t', description: 'Папе', complete: false},
        {id: '4tykq6-gwr-lm6-ybj-fva721tuk', description: 'Луке', complete: false}
      ],
      user: 'Anna Cherniakhivska',
      id: 'geiij3-j6u-a9u-9vp-zcjqk3hcr',
      date: '2016/10/06'
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
      console.log(shoppingList);
      if (!shoppingList.user) {
        shoppingList.user = action.payload;
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
