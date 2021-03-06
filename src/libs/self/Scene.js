import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '../controls/OrbitControls';
import { addCameras } from '../../utils/camera';
import { addLights } from '../../utils/lights';

const ThreeScene = ({
  containerId,
  dimension: { width = 100, height = 100 } = {},
  cameras = {},
  orbitControls = false,
  lights = {}
}) => {
  let scene, renderer, geometry, material, cube;
  let camera;
  let controls;

  useEffect(() => {
    init();
    orbitControls && addOrbitControls();
    animate();
  });

  const init = () => {
    scene = new THREE.Scene();

    camera = addCameras(cameras);
    const light = addLights(lights);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor('#f1f1f1', 1);
    renderer.domElement.style.outline = 'none';

    document.getElementById(containerId).appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshStandardMaterial({ color: '#77a6f8', wireframe: false });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    console.log(scene);
  }

  const addOrbitControls = () => {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;
  }

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    if (orbitControls) {
      controls.update();
    }

    renderer.render(scene, camera);
  }

  return (
    <div id={containerId}></div>
  )
}

export default ThreeScene;