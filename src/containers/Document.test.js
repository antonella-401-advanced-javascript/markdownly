import React from 'react';
import { shallow } from 'enzyme';
import Document from './Document';
import store from '../store';

describe('Document component', () => {
  it('renders Document', () => {
    React.useContext = () => ({ store });
    const wrapper = shallow(<Document store={store}/>, {
      context: { store }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
