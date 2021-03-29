import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../Text';

interface IContainerProps {
  deletable: boolean;
}

interface IIconContainerProps {
  iconBackgroundColor: string;
}

interface IIconProps {
  iconColor: string;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  background-color: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  padding: 5px 22px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin: 0px 5px;
  padding-right: ${({ deletable }) => (deletable ? '15px' : '22px')};
`;

export const TagText = styled(Text)`
  font-size: 13px;
  color: #000;
`;

export const IconContainer = styled.TouchableOpacity<IIconContainerProps>`
  background-color: ${({ iconBackgroundColor }) => iconBackgroundColor};
  border-radius: 50px;
  margin-left: 10px;
  padding: 2px;
`;

export const Icon = styled(MaterialIcon)<IIconProps>`
  color: ${({ iconColor }) => iconColor};
  font-size: 12px;
`;
