import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Detail from '@pages/detail';
import { DetailCard } from '@components/card';
import configureStore from '@redux/configureStore';

describe('<Detail />', () => {
  const initialState = {
    todo: {
      todoDatas: [
        { id: 0, content: '1' },
        { id: 1, content: '2' },
      ],
    },
  };

  const wrapper = mount(
    <Provider store={configureStore(initialState, { isServer: false })}>
      <Detail id="0" />
    </Provider>,
  );

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('<DetailCard />', () => {
    const detailCardWrapper = wrapper.find(DetailCard);
    console.log(detailCardWrapper.find('h3').text());
    it('renders detailCard component', () => {
      expect(detailCardWrapper.find('h3').text()).toBe('1');
    });
  });
});