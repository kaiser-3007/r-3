import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import styles from './styles.scss';
import Scene from './components/Scene';
import allScenes from './configs/allScenesConfig';
import singleScene from './configs/singleSceneConfig';
import AudioScene from './components/Audio';

const AllScenes = () => (
  <div>
    <h1 className={styles.heading}>React - ThreeJS Experiments</h1>
    <div className={styles.pages}>
      <Link className={styles.page} to="/"><div>All Examples</div></Link>
      <Link className={styles.page} to="/onescene"><div>Single Scene</div></Link>
      <Link className={styles.page} to="/audioscene"><div>Audio Scene</div></Link>
    </div>
    <div className={styles.examples}>
      {allScenes.map((props, index) => <Scene key={index} {...props} />)}
    </div>
  </div>
)

const SingleScene = () => (
  <div>
    <h1 className={styles.heading}>React - ThreeJS Experiments</h1>
    <div className={styles.pages}>
      <Link className={styles.page} to="/"><div>All Examples</div></Link>
      <Link className={styles.page} to="/onescene"><div>Single Scene</div></Link>
      <Link className={styles.page} to="/audioscene"><div>Audio Scene</div></Link>
    </div>
    <div className={styles.examples}>
      <Scene {...singleScene} />
    </div>
  </div>
)

const Routing = () => (
  <Router>
    <Route exact path="/">
      <AllScenes />
    </Route>
    <Route exact path="/onescene">
      <SingleScene />
    </Route>
    <Route exact path="/audioscene">
      <AudioScene />
    </Route>
  </Router>
)

ReactDOM.render(<Routing />, document.getElementById('root'));