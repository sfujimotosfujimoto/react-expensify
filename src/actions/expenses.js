import uuid from "uuid";
import database from "../firebase/firebase";
/**
 * Action
 */

export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});
// START ADD EXPENSE
export const startAddExpense = (expenseData = {}) => {
  // returning a function only works because of redux-thunk
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt
    };

    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};
////

/**
 * START EDIT EXPENSE
 **/

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`user/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

//

/**
 * START REMOVE EXPENSE
 **/
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

/**
 * SET EXPENSES
 **/

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};
