import React from 'react';
import { screen, render, act, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import FetchingComponent from '../FetchingComponent';

const mockData = { json: () => ({ name: 'kitten' })};
const dataRetuned = { name: 'kitten '};

/**
 * SPY overwrite window fetch 
*/
jest.spyOn(window, 'fetch').mockResolvedValue(mockData);
// const windowFetchSpy = jest.spyOn(window, 'fetch').mockResolvedValue(mockData);


// jest.mock('../FetchingComponent', () => function MockThis() {
//   const MockName = 'default-fetching-component';
//   const getData = () => dataRetuned;
//   return  <div>hi</div>;
// });


const setUp = () =>  {
  render(<FetchingComponent/>);
  // eslint-disable-next-line testing-library/await-async-utils
  // waitFor(() => {
  //   expect(screen.getByTestId('fetch-component')).toBeInTheDocument();
  // });
};

describe.only('FetchingComponent Title', () => {

  // test('should spy on getData func', () => {
    // setUp();
  //   expect(getDataSpy).toHaveBeenCalledTimes(1);
  // });

  it('redners loading state', async () => {
    setUp();
    const loading = await screen.findByText('loading', { exact: false });
    expect(loading).toHaveTextContent('loading');
    // expect(await screen.findByText('loading', { exact: false })).toBeInTheDocument();
  });

  it('render "Fetched Data" heading', async () => {
    setUp();
    // await waitForElementToBeRemoved(() => screen.queryByText('loading'));
    // waitFor(() => {
    //   expect(screen.getByTestId('fetch-component')).toBeInTheDocument();
    // });
    const title = await screen.findByText('Fetched', {exact: false});
    expect(title).toHaveTextContent('Fetched Data');
  });
});

describe('FetchingComponent Paragraph', () => {
    it('initial loading state', async () => {
      setUp();
      const result = await screen.findByText('loading', { exact: false});
      expect(result).toBeInTheDocument();
  });
  
  it('value displayed after fetching', async () => {
   setUp();
    const loading = await screen.findByText('loading', {exact: false}); 
    expect(loading).toHaveTextContent('loading');

    // findBy* awaits page load
    const dataDisplay = await screen.findByText('name', {exact: false});
    expect(dataDisplay).toBeDefined();
    expect(dataDisplay).toHaveTextContent('name');
    expect(dataDisplay).toHaveTextContent('kitten');    
  });

});

