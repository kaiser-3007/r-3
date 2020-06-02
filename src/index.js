import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import styles from './styles.scss';
import Scene from './components/Scene';
import allScenes from './configs/allScenesConfig';
import singleScene from './configs/singleSceneConfig';

const AllScenes = () => (
  <div className={styles.examples}>
    {allScenes.map((props, index) => <Scene key={index} {...props} />)}
  </div>
)

const SingleScene = () => (
  <div className={styles.examples}>
    <Scene {...singleScene} />
  </div>
)

const Routing = () => (
  <Router>
    <h1 className={styles.heading}>React - ThreeJS Experiments</h1>
    <div className={styles.pages}>
      <Link className={styles.page} to="/"><div>All Examples</div></Link>
      <Link className={styles.page} to="/onescene"><div>Single Scene</div></Link>
    </div>
    <Route exact path="/">
      <AllScenes />
    </Route>
    <Route exact path="/onescene">
      <SingleScene />
    </Route>
  </Router>
)

ReactDOM.render(<Routing />, document.getElementById('root'));