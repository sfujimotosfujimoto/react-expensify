import { createStore, combineReducers } from "redux";
import uuid from "uuid";

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Rent",
    amount: 100,
    createdAt: -2000
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: "Coffee",
    amount: 300,
    createdAt: -1000
  })
);
const expenseThree = store.dispatch(
  addExpense({
    description: "Book",
    amount: 200,
    createdAt: -500
  })
);
//
// store.dispatch(
//   removeExpense({ id: expenseOne.expense.id })
// );
//
// store.dispatch(
//   editExpense(expenseTwo.expense.id, { amount: 500 })
// );
//
// store.dispatch(setTextFilter("e"));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [
    {
      id: "alksdjflkaj",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
