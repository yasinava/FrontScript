const initialState = {
  users: [],
  online: [],
  sign: false,
  login: false,
};

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN":
      if (!state.users.find((user) => user.email === action.payload.email)) {
        state.users.push({
          ...action.payload,
        });
        state.sign = true;
      } else {
        alert("you can not use this email");
        state.sign = false;
      }
      return {
        ...state,
        users: [...state.users],
        sign: state.sign,
      };
    case "LOGIN":
      console.log(state.users);
      if (state.users.find((user) => user.email === action.payload.email)) {
        state.login = true;
      } else {
        state.login = false;
        alert("you do not have account ");
      }
      const onlineUsers = state.users.filter(
        (user) => user.password === action.payload.password
      );
      return {
        ...state,
        online: [...onlineUsers],
        login: state.login,
        sign: false,
      };
      case "LOGOUT":
        return{
            ...state,
            online: [],
            login: false,
        }
    default:
      return state;
  }
};

export default signReducer;