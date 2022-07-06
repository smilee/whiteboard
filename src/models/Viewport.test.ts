import Viewport from './Viewport';

describe('Viewport', () => {
  it('sets width, height', () => {
    const x = 12;
    const y = 24;
    const width = 120;
    const height = 200;

    const viewport = new Viewport(x, y, x + width, y + height);

    expect(viewport.width).toBe(width);
    expect(viewport.height).toBe(height);
  });
});
