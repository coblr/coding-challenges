'use strict';

const express = require('express');
const server = express();
const { log } = console;

const ItemAdapter = require('../adapters/ItemAdapter');

module.exports = WebInterface();

function WebInterface() {
  return {
    create: init
  };

  function init() {
    const itemAdapter = ItemAdapter.create();

    server.get('/', (req, res) => res.send(itemAdapter.renderList()));
    server.get('/items/:itemId', (req, res) =>
      res.send(itemAdapter.renderDetails(req.params.itemId))
    );
    server.listen(3000);
    log('Listening on 3000...');
  }
}
