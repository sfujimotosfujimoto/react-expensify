import React from 'react';
import { shallow } from 'enzyme';
import numeral from 'numeral';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});
test('should correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={2} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

