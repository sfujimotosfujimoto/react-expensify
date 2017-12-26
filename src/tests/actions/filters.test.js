import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

import moment from 'moment';

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});
test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should generate setTextFilter obj with test value', () => {
  const action = setTextFilter('Something');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Something'
  });
});
test('should generate setTextFilter obj with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
test('should generate action obj for sortByDate', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});
test('should generate action obj for sortByAmount', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
