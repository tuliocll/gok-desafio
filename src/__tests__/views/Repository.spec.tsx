import React from 'react';
import { render } from 'react-native-testing-library';

import Repositorys from '../../views/Repositorys';

describe('Repository', () => {
  it('should contain a header', () => {
    const { getByTestId } = render(<Repositorys />);

    expect(getByTestId('header'));
  });

  it('should contain a repo list', () => {
    const { getByTestId } = render(<Repositorys />);

    expect(getByTestId('repo-list'));
  });

  it('should show a empety list component', () => {
    const { getByTestId } = render(<Repositorys />);

    expect(getByTestId('no-itens'));
  });

  it('should contain a search bar', () => {
    const { getByTestId } = render(<Repositorys />);

    expect(getByTestId('search-repo'));
  });
});
