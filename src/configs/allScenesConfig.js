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
    sceneLabel: 'Perspective Camera',
    containerId: 'camera-perspective',
    dimension: {
      width: 300,
      height: 300
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
    }
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
    }
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
      type: 'ambient',
      args: {
        color: 0xffffff,
        intensity: 1
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
    }
  },
  {
    sceneLabel: 'Directional Light',
    containerId: 'directional-light',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'directional',
      args: {
        color: 0xffffff,
        intensity: 1,
        castShadow: true
      },
      temps: {
        position: {
          x: 0,
          y: 10,
          z: 10
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }
    }
  },
  {
    sceneLabel: 'Hemisphere Light',
    containerId: 'hemisphere-light',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'hemisphere',
      args: {
        color: 0xffffff,
        intensity: 1,
        skyColor: 0xffffff,
        groundColor: 0xffffff
      },
      temps: {
        position: {
          x: 0,
          y: 10,
          z: 10
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }
    }
  },
  {
    sceneLabel: 'Point Light',
    containerId: 'point-light',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'point',
      args: {
        color: 0xffffff,
        intensity: 1,
        distance: 100,
        decay: 2,
        power: (Math.PI * 4),
        castShadow: true
      },
      temps: {
        position: {
          x: 0,
          y: 10,
          z: 10
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }
    }
  },
  {
    sceneLabel: 'RectArea Light',
    containerId: 'rectarea-light',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'rectarea',
      args: {
        color: 0xffffff,
        intensity: 1,
        width: 1000,
        height: 1000
      },
      temps: {
        position: {
          x: 10,
          y: 10,
          z: 10
        },
        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      }
    }
  },
  {
    sceneLabel: 'Spot Light',
    containerId: 'spot-light',
    dimension: {
      width: 300,
      height: 300
    },
    orbitControls: true,
    lights: {
      type: 'spot',
      args: {
        color: 0xffffff,
        intensity: 1,
        distance: 100,
        angle: (Math.PI / 2),
        penumbra: 0,
        decay: 2,
        castShadow: true,
        power: Math.PI
      },
      temps: {
        position: {
          x: 10,
          y: 10,
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
]