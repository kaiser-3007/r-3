import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';
import Scene from './components/Scene';
import allScenes from './configs/allScenesConfig';
import singleScene from './configs/singleSceneConfig';

const App = () => (
  <div>
    <h1 className={styles.heading}>React - ThreeJS Experiments</h1>
    <div className={styles.examples}>
      {/* {allScenes.map((props) => <Scene {...props} />)} */}
      <Scene {...singleScene} />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));