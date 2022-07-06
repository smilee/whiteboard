import reducer, { update, viewportState } from './viewportSlice';
import Viewport from '../../models/Viewport';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      viewport: JSON.stringify(new Viewport(0, 0, 800, 600)),
    });
  });

  describe('update', () => {
    it('should handle a viewport update', () => {
      const previousState: viewportState = {
        viewport: JSON.stringify(new Viewport(0, 0, 800, 600)),
      };

      expect(reducer(previousState, update(JSON.stringify({
        left: 12,
        top: 24,
        right: 1200,
        bottom: 800,
      })))).toEqual({
        viewport: JSON.stringify(new Viewport(12, 24, 1200, 800)),
      });
    });
  });
});
