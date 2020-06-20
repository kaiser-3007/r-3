import React, { useEffect } from 'react';
import styles from './styles.scss';
import * as THREE from 'three';
import { OrbitControls } from '../../libs/controls/OrbitControls';
import { addCameras } from '../../utils/camera';
import { addLights } from '../../utils/lights';

const ThreeScene = ({
  containerId = 'audio-scene',
  dimension: { width = window.innerWidth, height = window.innerHeight } = {},
  cameras = {},
  orbitControls = true,
  lights = {}
}) => {
  let scene, renderer, geometry, material, cube, group;
  let camera;
  let controls;
  let listener, sound, audioLoader, audioAnalyser, beats = [];

  useEffect(() => {
    init();
    orbitControls && addOrbitControls();
    addSound();
    animate();
  });

  const init = () => {
    scene = new THREE.Scene();
    group = new THREE.Group();
    scene.add(group);

    group.position.set(-1.5, 0, 0);

    camera = addCameras(cameras);
    const light = addLights(lights);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor('#000000', 1);
    renderer.domElement.style.outline = 'none';
    renderer.setPixelRatio(window.devicePixelRatio);

    document.getElementById(containerId).appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    material = new THREE.MeshStandardMaterial({ color: '#CC00FF', wireframe: false });
  }

  const addSound = () => {
    listener = new THREE.AudioListener();
    camera.add(listener);
    sound = new THREE.Audio(listener);
    audioLoader = new THREE.AudioLoader();
    audioLoader.load('https://cdn.glitch.com/5baff6cb-c2d7-43b1-9392-3676bfaaff2b%2F376737_Skullbeatz___Bad_Cat_Maste.mp3?v=1592683655986', function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.autoplay = true;
      scene.add(sound);
    });
    audioAnalyser = new THREE.AudioAnalyser(sound, 32);
    addDisplayBeats();
  }

  document.addEventListener('click', function () {
    sound.play();
  })

  const addOrbitControls = () => {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 5;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;
  }

  const addDisplayBeats = () => {
    let currentFrequency = audioAnalyser.getFrequencyData();
    if (group.children.length !== currentFrequency.length) {
      currentFrequency.forEach((element, index) => {
        let cube = new THREE.Mesh(geometry, material);
        cube.position.set(index * 0.2, 0, 0);
        group.add(cube);
      })
    } else {
      currentFrequency.forEach((element, index) => {
        group.children[index].scale.set(1, currentFrequency[index] === 0 ? 1 : (currentFrequency[index] / 10), 1);
      })
    }
  }

  const animate = () => {
    requestAnimationFrame(animate);

    if (orbitControls) {
      controls.update();
    }

    if (sound.isPlaying) {
      addDisplayBeats();
    }

    renderer.render(scene, camera);
  }

  return (
    <div id={containerId}></div>
  )
}

export default ThreeScene;