import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseListItem  from '../../components/expenseListitem';
import expenses from '../fixtures/expenses';

test('should render expenselistitem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})