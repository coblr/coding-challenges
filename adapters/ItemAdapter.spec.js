const ItemAdapter = require('./ItemAdapter.js');

const mockReq = {
  params: { itemId: '123' }
};
const mockRes = {
  send: jest.fn()
};
const mockItemApi = {
  renderItemNav: jest.fn(),
  renderDetails: jest.fn()
};

describe('Web API', () => {
  const api = ItemAdapter.create(mockItemApi);

  it('returns route handling methods', () => {
    expect(Object.keys(api)).toEqual(['handleRoot', 'handleItemDetails']);
  });

  it('handles the root route', () => {
    api.handleRoot(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalled();
    expect(mockItemApi.renderItemNav).toHaveBeenCalled();
  });

  it('handles the item detail route', () => {
    api.handleItemDetails(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalled();
    expect(mockItemApi.renderDetails).toHaveBeenCalledWith('123');
  });
});
