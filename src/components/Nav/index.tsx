import React from 'react';

import { Container } from './style';

export const Nav = ({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement => {
  return <Container>{children}</Container>;
};
