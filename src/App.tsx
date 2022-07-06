import { Global } from '@emotion/react';

import reset from './styles/reset';
import Board from './components/Board';

export default function App() {
  return (
    <>
      <Global styles={reset} />
      <Board />
    </>
  );
}
