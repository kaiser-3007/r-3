export default {
  sceneLabel: 'All Scene',
  containerId: 'end-canvas',
  dimension: {
    width: 800,
    height: 600
  },
  orbitControls: true,
  lights: {
    type: 'AmbientLight'
  },
  cameras: [{
    type: 'perspective',
    args: {
      fov: 20,
      width: 800,
      height: 600,
      near: 0.1,
      far: 1000
    },
    temps: {
      position: {
        x: 0,
        y: 0,
        z: 10
      },
      scale: {
        x: 1,
        y: 1,
        z: 1
      }
    }
  },
  {
    type: 'orthographic',
    args: {
      left: -2,
      right: 2,
      top: 2,
      bottom: -2,
      near: 0.1,
      far: 1000
    },
    temps: {
      position: {
        x: 0,
        y: 0,
        z: 5
      },
      scale: {
        x: 1,
        y: 1,
        z: 1
      }
    }
  }]
}