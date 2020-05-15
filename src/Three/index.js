import React, { useEffect, Fragment } from "react";
import * as THREE from "./js/three.modules";
import { OrbitControls } from '../libs/OrbitControls';
import './styles.css';

let scene, camera, renderer, geometry, material, cube, controls;
const dimension = {
  width: 300,
  height: 300
}

const Test = () => {
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
    document.querySelector('#three-container').appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: '#624ce0', wireframe: true });
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
    <div id="three-container" className="container" />
  )
}

export default Test;