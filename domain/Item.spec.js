const Item = require('./Item');

describe('Item API', () => {
  const items = [
    { id: '1', name: 'i1', stuff: 'things' },
    { id: '2', name: 'i2' }
  ];
  const api = Item.create(items);

  it('creates a module with create method', () => {
    expect(typeof Item.create).toBe('function');
  });

  it('calling create returns an item api', () => {
    expect(Object.keys(api)).toEqual([
      'getItemById',
      'renderNav',
      'renderDetails'
    ]);
  });

  it('finds an item by itemId', () => {
    const item = api.getItemById('1');
    expect(item).toEqual(items[0]);
  });

  it('renders a nav UI', () => {
    const nav = api.renderNav();
    expect(nav).toBe('<a href="/items/1">i1</a> | <a href="/items/2">i2</a>');
  });

  it('renders an item detail UI', () => {
    const details = api.renderDetails('1');
    expect(details).toBe(
      [
        `<p><a href="/">Back</a></p>`,
        `<h1>i1</h1>`,
        `<p>stuff: things</p>`
      ].join('')
    );
  });
});
