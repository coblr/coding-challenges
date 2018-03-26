'use strict';

const Item = require('../domain/Item');
const { log } = console;

module.exports = ItemAdapter();

function ItemAdapter() {
  return {
    create: init
  };

  function init() {
    const item = Item.create();

    return {
      renderList,
      renderDetails
    };

    function renderList() {
      return item
        .getItemRoutes()
        .map(route => `<a href="${route.url}">${route.title}</a>`)
        .join(' | ');
    }

    function renderDetails(itemId) {
      const { id, name, ...deets } = item.getItemDetails(itemId);
      const response = [`<p><a href="/">Back</a></p>`, `<h1>${name}</h1>`];
      for (const deet in deets) {
        response.push(`<p>${deet}: ${deets[deet]}</p>`);
      }

      return response.join('');
    }
  }
}
