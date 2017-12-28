import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = ({
  expenseCount,
  expensesTotal
}) => {
  const expenseWord =
    expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(
    expensesTotal
  ).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {expenseCount} expenses totalling{' '}
        {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(
    state.expenses,
    state.filters
  );

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);

