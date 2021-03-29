import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-left: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

export const Icon = styled(MaterialIcons)`
  font-size: 25px;
  color: #7e7e7e;
`;
