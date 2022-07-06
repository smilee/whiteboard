import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../app/store';

import Board from './Board';

describe('Board', () => {
  it('renders without crashing', () => {
    render((
      <Provider store={store}>
        <Board />
      </Provider>
    ));
  });
});
