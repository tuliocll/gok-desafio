import React from 'react';
import { render } from 'react-native-testing-library';

import Login from '../../views/Login';

describe('Login', () => {
  it('should contain username field and button', () => {
    const { getByTestId } = render(<Login />);

    expect(getByTestId('username'));
    expect(getByTestId('register-button'));
  });
});
