import * as THREE from
'https://cdn.skypack.dev/three@0.136.0/build/three.module.js';
// Create the WebGL Renderer and apply a antialias filter
 let renderer = new THREE.WebGLRenderer({antialias: true });
// Configure renderer size
 renderer.setSize(window.innerWidth, window.innerHeight);
//Apped the renderer to the Body of the page
 document.body.appendChild( renderer.domElement );

 let scene = new THREE.Scene();
 scene.background = new THREE.Color( 'lightblue' );
 const fov = 75; //field of view
 const aspect = window.innerWidth/window.innerHeight; //Camera aspect should match the renderer size
 const near = 0.1; //near clipping plane
 const far = 100; //far clipping plane
 const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
 camera.position.z = 4; //move the camera 4 units away from the centre on the Z axis. ThreeJs use Y-up and Z-forward
// ------------------------------------------------
// CONTENT OF OUR SCENE
// ------------------------------------------------
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#000FFF" } );
var cube = new THREE.Mesh( geometry, material );
//change the position of the cube
// x=horizontal y=vertical z=depth
cube.position.set(0,0,1);
// Add cube to Scene
scene.add( cube );
renderer.render(scene, camera);