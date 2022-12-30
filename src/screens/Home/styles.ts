import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 500px;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 16px;
`;
