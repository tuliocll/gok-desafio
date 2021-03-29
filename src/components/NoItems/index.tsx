import React from 'react';

import { Image, Container } from './style';
import { Text } from '../Text';
import octo from '../../assets/images/octocat.png';

import { Loader } from '../ContentLoader';
import { Col } from '../Col';

export function NoItems({
  isLoading,
  testID,
}: {
  testID?: string;
  isLoading?: boolean;
}): React.ReactElement {
  return (
    <Container isLoading={isLoading} testID={testID}>
      {isLoading ? (
        <>
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : (
        <Col>
          <Image source={octo} />
          <Text>No data to display</Text>
        </Col>
      )}
    </Container>
  );
}
