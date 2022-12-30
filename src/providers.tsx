import React, { FC } from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

interface IProvidersProps {
  children: JSX.Element;
}

const Providers: FC<IProvidersProps> = ({ children }) => <Container>{children}</Container>;

export default Providers;
