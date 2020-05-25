import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import ThreeScene from './libs/self/Scene';

const App = () => (
  <div>
    <h1 className={styles.heading}>React - ThreeJS Experiments</h1>
    <div className={styles.examples}>
      <div className={styles.container}>
        <ThreeScene
          containerId="basic-scene"
          dimension={{ width: 300, height: 300 }} />
        <div className={styles.text}>Simple Scene</div>
      </div>

      <div className={styles.container}>
        <ThreeScene
          containerId="orbit-controls"
          dimension={{ width: 300, height: 300 }}
          orbitControls={true} />
        <div className={styles.text}>Orbit Controls</div>
      </div>

      <div className={styles.container}>
        <ThreeScene
          containerId="ambient-light"
          dimension={{ width: 300, height: 300 }}
          orbitControls={true}
          lights={{ type: 'AmbientLight' }} />
        <div className={styles.text}>Ambient Light</div>
      </div>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));