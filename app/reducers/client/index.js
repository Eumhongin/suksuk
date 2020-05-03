const initialState = {
  join: {
    agreement: {
      total: false,
      agree1: false,
      agree2: false,
      agree3: false,
    },
    info: {
      name: '',
      email: '',
      password: '',
      passwordconfirm: '',
    },
  },
};

const client = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'CHANGE/TOTAL/AGREEMENT':
      return {
        ...state,
        join: {
          agreement: {
            ...state.join.agreement,
            total: payload,
          },
        },
      };
    case 'CHANGE/AG1/AGREEMENT':
      return {
        ...state,
        join: {
          agreement: {
            ...state.join.agreement,
            agree1: payload,
          },
        },
      };
    case 'CHANGE/AG2/AGREEMENT':
      return {
        ...state,
        join: {
          agreement: {
            ...state.join.agreement,
            agree2: payload,
          },
        },
      };
    case 'CHANGE/AG3/AGREEMENT':
      return {
        ...state,
        join: {
          agreement: {
            ...state.join.agreement,
            agree3: payload,
          },
        },
      };
    case 'UPDATE/NAME':
      return {
        ...state,
        join: {
          ...state.join,
          info: {
            ...state.join.info,
            name: payload,
          },
        },
      };
    case 'UPDATE/EMAIL':
      return {
        ...state,
        join: {
          ...state.join,
          info: {
            ...state.join.info,
            email: payload,
          },
        },
      };
    case 'UPDATE/PASSWORD':
      return {
        ...state,
        join: {
          ...state.join,
          info: {
            ...state.join.info,
            password: payload,
          },
        },
      };
    case 'UPDATE/PASSWORDCONFIRM':
      return {
        ...state,
        join: {
          ...state.join,
          info: {
            ...state.join.info,
            passwordconfirm: payload,
          },
        },
      };
    default:
      return state;
  }
};
export default client;
