import React from 'react';
import { screen, render } from '@testing-library/react';
import FetchingComponent from '../FetchingComponent';

const mockData = { json: () => ({ name: 'kitten' })};
const dataRetuned = { name: 'kitten '};

// const MockComponent = () => (<div>Sharks!</div>);

// jest.mock('../FetchingComponent', () => ({
//   __esModule: true,
//   namedExport: jest.fn(),
//   default: jest.fn(),
// }));


jest.mock('../FetchingComponent', () => {
  const original = jest.requireActual('../FetchingComponent');

  return {
    __esModule: true,
    ...original,
    default: jest.fn(() => 'mocked component'),
    getData: () => dataRetuned,
  };
});


/**
 * SPY overwrite window fetch 
 */
// jest.spyOn(window, 'fetch').mockResolvedValue(mockData);
// const windowFetchSpy = jest.spyOn(window, 'fetch').mockResolvedValue(mockData);

/**
 * Mock private function
 */
// const fetchData = jest.spyOn(FetchingComponent.prototype, 'getData');
// fetchData.mockResolvedValue(mockData);

const setUp = async () => render(<FetchingComponent/>);

describe('FetchingComponent Title', () => {
  it('render "Fetched Data" heading', async () => {
    setUp();
    const title = await screen.findByText('Fetched', {exact: false});
    expect(title).toHaveTextContent('Fetched Data');
  });
});

describe('FetchingComponent Paragraph', () => {
  
    it('initial loading state', () => {
        setUp();
    const result = screen.queryByText('loading', { exact: false});
    expect(result).toBeInTheDocument();
  });
  
  it('value displayed after fetching', async () => {
   setUp();
    const loading = screen.queryByText('loading', {exact: false}); 
    expect(loading).toHaveTextContent('loading');

    // findBy* awaits page load
    const dataDisplay = await screen.findByText('name', {exact: false});
    expect(dataDisplay).toBeDefined();
    expect(dataDisplay).toHaveTextContent('name');
    expect(dataDisplay).toHaveTextContent('kitten');    
  });

});

