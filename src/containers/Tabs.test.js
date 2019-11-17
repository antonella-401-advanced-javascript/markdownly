import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';
import store from '../store';

describe('Tabs component', () => {
  it('renders Tabs', () => {
    React.useContext = () => ({ store });
    const wrapper = shallow(<Tabs store={store}/>, {
      context: { store }
    });
    expect(wrapper).toMatchSnapshot();
  });
}); 
