import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Text as TextComponent } from '../Text';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled(TextComponent)`
  color: #7e7e7e;
  font-size: 14px;
`;

export const Icon = styled(MaterialIcon)`
  color: #7e7e7e;
  font-size: 18px;
  margin-right: 5px;
`;
