import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if not id found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expenseToAdd = {
    id: '4',
    description: 'Game',
    note: '',
    amount: 2050,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenseToAdd
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expenseToAdd]);
});

test('should edit expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense with wrong id', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
