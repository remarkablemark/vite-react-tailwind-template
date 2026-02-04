import { createRoot } from 'react-dom/client';

const mockRender = jest.fn();

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: mockRender,
  })),
}));

const mockCreateRoot = jest.mocked(createRoot);

beforeAll(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

afterAll(() => {
  document.body.innerHTML = '';
});

describe('main entry point', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates root and renders App', () => {
    return import('./main').then(() => {
      expect(mockCreateRoot).toHaveBeenCalledWith(
        document.getElementById('root'),
      );

      expect(mockRender).toHaveBeenCalled();
    });
  });
});
