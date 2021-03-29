import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IContainerProps {
  backgroundColor?: string;
}

interface IIconProps {
  iconColor?: string;
  iconSize?: number;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#e8e8e8'};
  border-radius: 100px;
  padding: 4px;
`;

export const Icon = styled(MaterialIcon)<IIconProps>`
  color: ${({ iconColor }) => iconColor || '#000'};
  font-size: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '18px')};
`;
