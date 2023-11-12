import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WorldGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    let scene, camera, renderer, globe;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(globeRef.current.clientWidth, globeRef.current.clientHeight);
      globeRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x0099ff, wireframe: true });
      globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      camera.position.z = 2;

      window.addEventListener('resize', handleWindowResize);

      animate();
    };

    const handleWindowResize = () => {
        console.log("Resizing...");

      const newWidth = globeRef.current.clientWidth;
      const newHeight = globeRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };





    const animate = () => {
      requestAnimationFrame(animate);

      globe.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    init();

    // Clean up Three.js scene when the component unmounts
    // return () => {
    //   window.removeEventListener('resize', handleWindowResize);

    //   scene.remove(globe);
    //   renderer.dispose();
    // };
  }, []); // Run the effect only once when the component mounts

  return (
<>

return <div className="test" ref={globeRef} style={{ width: '100%', height: '100%' }} />;





{/* return <div ref={globeRef} style={{ width: '100%', height: '100%', minHeight: '300px' }} />; */}

</>

  )
};

export default WorldGlobe;




























// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const WorldGlobe = () => {
//   const globeRef = useRef();
//   let scene, camera, renderer, globe;

//   useEffect(() => {
//     const init = () => {
//       scene = new THREE.Scene();
//       camera = new THREE.PerspectiveCamera(75, globeRef.current.clientWidth / globeRef.current.clientHeight, 0.1, 1000);
//       renderer = new THREE.WebGLRenderer();
//       renderer.setSize(globeRef.current.clientWidth, globeRef.current.clientHeight);
//       globeRef.current.appendChild(renderer.domElement);

//       const geometry = new THREE.SphereGeometry(5, 32, 32);
//       const material = new THREE.MeshBasicMaterial({ color: 0x0099ff, wireframe: true });
//       globe = new THREE.Mesh(geometry, material);
//       scene.add(globe);

//       camera.position.z = 10;

//       window.addEventListener('resize', handleWindowResize);

//       animate();
//     };

//     const handleWindowResize = () => {
//       const newWidth = globeRef.current.clientWidth;
//       const newHeight = globeRef.current.clientHeight;

//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();

//       renderer.setSize(newWidth, newHeight);
//     };

//     const animate = () => {
//         console.log("Animating...");
//         globe.rotation.y += 0.01; // Try a smaller rotation value
//         console.log("Rotation:", globe.rotation.y);

//         renderer.render(scene, camera);
//         requestAnimationFrame(animate);
//       };

//     init();

//     // Clean up Three.js scene when the component unmounts
//     return () => {
//       window.removeEventListener('resize', handleWindowResize);

//       scene.remove(globe);
//       renderer.dispose();
//     };
//   }, []); // Run the effect only once when the component mounts

//   return <div ref={globeRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default WorldGlobe;
