import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleCubeRotation from './SimpleCubeRotation';
import ControlsOrbit from './ControlsOrbit';

const App = () => (
  <div>
    <h1 className="heading">React - ThreeJS Experiments</h1>
    <div className="examples">
      <SimpleCubeRotation />
      <ControlsOrbit />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));