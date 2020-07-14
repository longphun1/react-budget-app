import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilter';

const expenseDashboard = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default expenseDashboard;