import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View.attrs({ elevation: 3 })`
  background-color: #fff;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
`;

export const TextInput = styled.TextInput`
  color: #7e7e7e;
  font-size: 18px;
  font-family: 'Mulish';
`;

export const Icon = styled(MaterialIcon)`
  color: #7e7e7e;
  font-size: 25px;
  margin-right: 10px;
`;
