import { createStore } from "redux";

/**
 * Action generators
 */

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET",
  count: 0
});

/**
 * REDUCERS
 */
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

/**
 * STORE
 */
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch({
  type: "DECREMENT",
  decrementBy: 3
});
store.dispatch(decrementCount());
store.dispatch(incrementCount());

store.dispatch(resetCount());
store.dispatch(setCount({ count: 100 }));

/**
 * Destructuring
 */

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
//
// const {
//   name: publisherName = "Self-Published"
// } = book.publisher;
//
// console.log(publisherName); // Penguin

/**
 * Array Destructuring
 */
//
// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147"
// ];
//
// const [, city, state] = address;
//
// console.log(`You are in ${city} ${state}.`);
//
// const item = [
//   "Coffee (hot)",
//   "$2.00",
//   "$2.50",
//   "$2.75"
// ];
//
// const [coffee, , medium] = item;
//
// console.log(
//   `A medium ${coffee} costs ${medium}.`
// );
