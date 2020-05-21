import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from '../libs/controls/OrbitControls';
import styles from './styles.scss';

let scene, camera, renderer, geometry, material, cube, controls;
const dimension = {
  width: 300,
  height: 300
}

const ControlsOrbit = () => {
  useEffect(() => {
    init();
    animate();
  });

  const init = () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, dimension.width / dimension.height, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(dimension.width, dimension.height);
    renderer.setClearColor('#f9d4d3', 1);
    renderer.domElement.style.outline = 'none';
    document.querySelector('#orbit-controls-container').appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;

    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: '#000000', wireframe: true });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  }

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }

  return (
    <div className={styles.container}>
      <div id="orbit-controls-container" className={styles.scene} />
      <div className={styles.text}>Orbit Controls</div>
    </div>
  )
}

export default ControlsOrbit;