const initialState = {
  items: [],
  course:[],
  price: 0,
  checkOut: false,

};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOSHOP":
      if (!state.items.find((item) => item.id === action.payload.id)) {
       
        state.items.push({...action.payload});
      }
      return {
        ...state,
        items: [...state.items],
        price: state.price + action.payload.price,
      };
    case "REMOVE":
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: [...newItems],
        price: state.price - action.payload.price,
      };
      case "ADDTOCOURSE":
        const newCourse=state.course.concat(state.items)
        return {
          ...state,
          course:[...newCourse]
        }
    case "CHECKOUT":
      return {
        ...state,
        items: [],
        price: 0,
        checkOut: true,
      };
      case "CLEAR":
        return {
          ...state,
          items: [],
          price: 0,
          checkOut: false,
        };
    default:
      return state;
  }
};
export default shopReducer;