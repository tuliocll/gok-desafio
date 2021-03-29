import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { Row } from '../Row';

export function Loader(): React.ReactElement {
  return (
    <Row style={{ height: 200 }}>
      <ContentLoader
        viewBox="0 0 380 220"
        foregroundColor="#ccc"
        backgroundColor="#fff">
        <Rect x="0" y="17" rx="10" ry="10" width="98%" height="200" />
      </ContentLoader>
    </Row>
  );
}
