import React from 'react';
import { shallow } from 'enzyme';
import  expenseDashboard  from '../../components/dashboard';

test('should render dashboard correctly', () => {
    const wrapper = shallow(<expenseDashboard/>)
    expect(wrapper).toMatchSnapshot();
})