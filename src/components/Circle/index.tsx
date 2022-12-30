import React from 'react';
import * as styles from './styles';
import { ICircleProps } from './types';

const Circle = ({ ...props }: ICircleProps) => <styles.Container {...props} />;

export default Circle;
