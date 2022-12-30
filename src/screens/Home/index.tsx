import React from 'react';
import Circle from '../../components/Circle';
import { ICircleProps } from '../../components/Circle/types';
import { useActions } from '../../hooks/useActions';
import { useRandom } from '../../hooks/useRandom';
import * as styles from './styles';

const Home = () => {
  const { array, add, undo, reundo } = useActions<ICircleProps>();
  const { generateBetweenInterval } = useRandom();

  return (
    <styles.Container
      onPress={e =>
        add({
          color: generateBetweenInterval(0, 360),
          x: e.nativeEvent.locationX,
          y: e.nativeEvent.locationY,
        })
      }
    >
      {array.map(item => (
        <Circle key={item.color} {...item} />
      ))}

      <styles.Wrapper>
        <styles.Text onPress={() => undo()}>↩</styles.Text>
        <styles.Text onPress={() => reundo()}>↪</styles.Text>
      </styles.Wrapper>
    </styles.Container>
  );
};

export default Home;
