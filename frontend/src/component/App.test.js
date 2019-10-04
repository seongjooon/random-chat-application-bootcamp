import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  let switchPage;
  let wrapper;
  beforeEach(() => {
    switchPage = jest.fn();
    wrapper = mount(<Home switchPage={switchPage} />);
  });
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
