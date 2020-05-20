import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCubeRotation from './SimpleCubeRotation';
import ControlsOrbit from './ControlsOrbit';
import styles from './styles.scss';

const App = () => (
  <div>
    <h1 className={styles.heading}>React - ThreeJS Experiments</h1>
    <div className={styles.examples}>
      <SimpleCubeRotation />
      <ControlsOrbit />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));