import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import ThreeScene from './libs/self/Scene';

const App = () => (
  <div>
    <h1 className={styles.heading}>React - ThreeJS Experiments</h1>
    <div className={styles.examples}>
      <ThreeScene
        containerId="basic-scene"
        dimension={{ width: 300, height: 300 }} />

      <ThreeScene
        containerId="basic-scene"
        dimension={{ width: 300, height: 300 }}
        orbitControls={true} />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));