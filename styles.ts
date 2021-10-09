import { View } from 'react-native';
import styled from 'styled-components/native';

export const MainView = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const ContainerView = styled(View)`
  flex: 1;
  background-color: lightgray;
  align-items: center;
  justify-content: center;
`;

export const StyledScrollView = styled.ScrollView<any>`
  flex: 1;
  width: 100%;
`;
