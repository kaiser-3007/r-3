export default [
  {
    sceneLabel: 'Simple Scene',
    containerId: 'basic-scene',
    dimension: {
      width: 300,
      height: 300
    },
  },
  {
    sceneLabel: 'Orbit Controls',
    containerId: 'orbit-controls',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true
  },
  {
    sceneLabel: 'Ambient Light',
    containerId: 'ambient-light',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'AmbientLight'
    }
  },
  {
    sceneLabel: 'Perspective Camera',
    containerId: 'camera-perspective',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'AmbientLight'
    },
    cameras: [{
      type: 'perspective',
      args: {
        fov: 20,
        width: 300,
        height: 300,
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
    }]
  },
  {
    sceneLabel: 'Orthographic Camera',
    containerId: 'camera-orthographic',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'AmbientLight'
    },
    cameras: [{
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
]