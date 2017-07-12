import { fetchGem } from './gemAPIUtil';

describe('API Util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  test('fetchGem makes request and returns an ajax promise', () => {
    const returnValue = fetchGem('bcrypt');
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('gems/bcrypt');
    expect(returnValue).toEqual("ajax promise");
  });
});