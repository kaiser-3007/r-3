export default {
  sceneLabel: 'All Scene',
  containerId: 'end-canvas',
  dimension: {
    width: 800,
    height: 600
  },
  orbitControls: true,
  lights: {
    type: 'ambient',
    args: {
      color: 0xffffff,
      intensity: 1,
      castShadow: true
    },
    temps: {
      position: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: {
        x: 1,
        y: 1,
        z: 1
      }
    }
  },
  cameras: {
    type: 'perspective',
    args: {
      fov: 90,
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
  }
}