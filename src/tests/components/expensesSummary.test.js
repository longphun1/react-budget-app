import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/expensesSummary';

test('should correctly render summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render summary with mutiply expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={255555535}/>)
    expect(wrapper).toMatchSnapshot();
});
