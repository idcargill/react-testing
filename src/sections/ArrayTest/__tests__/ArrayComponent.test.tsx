import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ArrayComponent, { peopleData } from '../ArrayComponent';


describe('Initial Array test', () => {
  beforeEach(() => {
    render(<ArrayComponent data={peopleData} />);
  });

  test('queryByText', () => {
    // Arrange
    // render(<ArrayComponent data={peopleData} />);

    // Act

    // Assert
    const item = screen.queryByText('Kitten', { exact: false });
    expect(item).toBeTruthy();
  });

  test("getByRole", () => {
    // render(<ArrayComponent data={peopleData} />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeDefined();
    expect(heading).toHaveTextContent('Render List');
  });

  test('getByTestId array length', () => {
    const items = screen.getAllByTestId('array-list-item');
    expect(items.length).toBe(3);
    expect(items[0]).toHaveTextContent('pizza');
  });


  test('Click changes state', () => {
    const items = screen.getAllByRole('listitem');

    const firstItem = items[0];
    expect(firstItem).toBeInTheDocument();
    expect(firstItem).toHaveTextContent('pizza', { exact: false });
    debugger;
    console.log(firstItem.style);
    // expect(firstItem).toHaveStyle({ color: 'black' });
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Render List');
    expect(heading).toHaveStyle({ color: 'red' });
    console.log(window.getComputedStyle(heading));
    // const thing = screen.queryByText('kitten', { exact: false });
    // expect(thing).toHaveTextContent('Tiger');
    // // expect(thing).toHaveStyle('color: black');
    // expect(thing).toBe('ListContainer');
  });
});
