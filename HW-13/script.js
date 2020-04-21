// Creates the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement)
renderer.outputEncoding = THREE.sRGBEncoding;

//Sets the scene background
scene.background = new THREE.Color( 'rgb(0, 128, 255)' );


var geometry = new THREE.TorusKnotGeometry(8, 2.2, 512, 64, 2, 3);
var material = new THREE.MeshBasicMaterial({
    color: 0xff0000
});
var ringloop = new THREE.Mesh(geometry, material);
scene.add(ringloop);

var geometry2 = new THREE.TorusGeometry(9, 3, 16, 100);
var material2 = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var ring = new THREE.Mesh(geometry2, material2);
scene.add(ring);

  var loader = new THREE.GLTFLoader();

var model = load_model();

  function load_model(){
    loader.load('models/icecream.glb', function(gltf) {

      scene.add(gltf.scene);
      gltf.scene.scale.set(.15,.15,.15);
      gltf.scene.position.set(0, -40, 0);

  }, undefined, function(error) {
      console.error(error);
  });
  }


// Sets the camera postion
     camera.position.y = -20

// Lighting settings
var light = new THREE.PointLight(0x404040, 10);
light.position.set(50, 50, 50);
scene.add(light);

  // Animation for the shapes
  function animate() {
      requestAnimationFrame( animate );
      ringloop.rotation.x += 0.01;
      ringloop.rotation.y += 0.01;
      ring.rotation.x += 0.01;
      ring.rotation.y += 0.01;
      renderer.render( scene, camera );
  }
  animate();



  var rotation = 0

        function spinCamera() {
            rotation += 0.001
            camera.position.z = Math.sin(rotation) * 80;
            camera.position.x = Math.cos(rotation) * 80;
            camera.lookAt(scene.position)
        }
        var render = function() {

            requestAnimationFrame(render);
            spinCamera();

            renderer.render(scene, camera);
        };

        render();
