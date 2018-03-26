'use strict';

const defaultItems = [
  {
    id: 'abc',
    name: 'Item 1',
    stuffed: 'jalapeños',
    specs: 'clear',
    wallet: 'empty'
  },
  {
    id: 'def',
    name: 'Item 2',
    stuffed: 'peppers',
    specs: 'dirty',
    wallet: 'plastic'
  },
  {
    id: 'ghi',
    name: 'Item 3',
    stuffed: 'mushrooms',
    specs: 'thick',
    wallet: 'full'
  }
];

module.exports = Item();

function Item() {
  return {
    create: init
  };

  function init(items = defaultItems) {
    return {
      getItemById,
      getItemRoutes,
      getItemDetails
    };

    function getItemById(itemId) {
      return items.find(i => i.id == itemId);
    }

    function getItemRoutes() {
      return items.map(item => ({
        url: `/items/${item.id}`,
        title: `${item.name}`
      }));
    }

    function getItemDetails(itemId) {
      return getItemById(itemId);
    }
  }
}
