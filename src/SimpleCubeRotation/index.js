import React, { useEffect, Fragment } from "react";
import * as THREE from "three";
import styles from './styles.scss';

let scene, camera, renderer, geometry, material, cube, controls;
const dimension = {
  width: 300,
  height: 300
}

const SimpleCubeRotation = () => {
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
    renderer.setClearColor('#e8effc', 1)
    document.querySelector('#simple-cube-container').appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: '#624ce0', wireframe: true });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  }

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  return (
    <div className={styles.container}>
      <div id="simple-cube-container" className={styles.scene} />
      <div className={styles.text}>Simple Scene</div>
    </div>
  )
}

export default SimpleCubeRotation;