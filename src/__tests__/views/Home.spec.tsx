import React from 'react';
import { render } from 'react-native-testing-library';

import Home from '../../views/Home';

describe('Home', () => {
  it('should contain a header', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('header'));
  });

  it('should contain a users list', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('users-list'));
  });

  it('should show a empety list component', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('no-itens'));
  });
});
