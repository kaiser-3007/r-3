import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '../controls/OrbitControls';

const ThreeScene = ({
  containerId,
  dimension: { width = 100, height = 100 } = {},
  orbitControls = false,
  lights = {}
}) => {
  let scene, camera, renderer, geometry, material, cube;
  let controls;

  useEffect(() => {
    init();
    orbitControls && addOrbitControls();
    lights.type && addLight();
    animate();
  });

  const init = () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor('#e8effc', 1);
    renderer.domElement.style.outline = 'none';

    document.getElementById(containerId).appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshStandardMaterial({ color: '#624ce0', wireframe: false });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
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

  const addLight = () => {
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);
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