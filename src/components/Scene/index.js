import React from 'react';
import styles from './styles.scss';
import ThreeScene from '../../libs/self/Scene';

const Scene = ({ sceneLabel, ...props }) => (
  <div className={styles.container}>
    <ThreeScene {...props} />
    <div className={styles.text}>{sceneLabel}</div>
  </div>
)

export default Scene;