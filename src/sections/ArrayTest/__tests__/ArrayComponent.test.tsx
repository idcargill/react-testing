import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import { ListItemStyle } from 'styles/index.css';

import ArrayComponent, { peopleData } from '../ArrayComponent';

describe('Initial Array test', () => {
  const user = userEvent.setup();

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


  test('List Items', async () => {
    const items = screen.getAllByRole('listitem');

    const firstItem = items[0];
    // screen.debug(firstItem);

    expect(firstItem).toBeInTheDocument();
    expect(firstItem).toBeVisible();

    expect(firstItem).toHaveTextContent('pizza');
    expect(firstItem).not.toHaveTextContent('candy');
    expect(firstItem).not.toBeDisabled();
    
    // action
    await user.click(firstItem);
    // expect(firstItem);
    
    // const heading = screen.getByRole('heading');
    // expect(heading).toHaveTextContent('Render List');


  });
});
