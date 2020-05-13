import React, { useEffect, Fragment } from "react";
import * as THREE from "three";
import './styles.css';

let scene, camera, renderer, geometry, material, cube

const Test = () => {
  useEffect(() => {
    init();
    animate();
  });

  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, (window.innerWidth / 2) / (window.innerHeight / 2), 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.querySelector('#three-container').appendChild(renderer.domElement);
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
  }

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  return (
    <div id="three-container" className="container" />
  )
}

export default Test;