import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Three';

const App = () => (
  <div>
    <h1 className="heading">React - ThreeJS Experiments</h1>
    <Test />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));