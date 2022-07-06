import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import type { RootState } from '../app/store';
import { update } from '../features/viewport/viewportSlice';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default function Board() {
  const viewport = JSON.parse(useSelector((state: RootState) => state.viewport.viewport));
  const dispatch = useDispatch();
  const refContainer = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    const handleResize = () => {
      const {
        current: {
          offsetLeft, offsetTop, offsetWidth, offsetHeight,
        },
      } = refContainer;

      dispatch(update(JSON.stringify({
        left: offsetLeft,
        top: offsetTop,
        right: offsetLeft + offsetWidth,
        bottom: offsetTop + offsetHeight,
      })));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container ref={refContainer}>
      <svg viewBox={[0, 0, viewport.width, viewport.height].join(' ')}>
        <rect width="100%" height="100%" fill="red" />

        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">SVG</text>
      </svg>
    </Container>
  );
}
