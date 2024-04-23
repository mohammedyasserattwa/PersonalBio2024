import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const containerRef = useRef();
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const spacing = 8;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.z = 25;

    const linesGroup = new THREE.Group();
    scene.add(linesGroup);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x15ff00, linewidth: 15, transparent: true, opacity: 0.15  });


    const lineGeometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = -10; i <= 10; i++) {
        for (let j = -10; j <= 10; j++) {
            const x = i * spacing;
            const y = j * spacing;
            const z = 0;
            const size = spacing / 2;

            vertices.push(
            x, y + size, z,
            x + size, y, z,
            x, y - size, z,

            x, y + size, z,
            x - size, y, z,
            x, y - size, z
            );

        }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    linesGroup.add(lines);


    useEffect(() => {
        containerRef.current.appendChild(renderer.domElement);

        const handleMouseMove = (event) => {
        mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        document.addEventListener('mousemove', handleMouseMove, false);

        const maxCameraMovement = 1;

        const animate = () => {
            requestAnimationFrame(animate);

            const targetX = mouseX.current * 10;
            const targetY = -mouseY.current * 10;
    
            // Apply limits to camera movement
            const clampedTargetX = Math.max(-maxCameraMovement, Math.min(maxCameraMovement, targetX));
            const clampedTargetY = Math.max(-maxCameraMovement, Math.min(maxCameraMovement, targetY));
    
            camera.position.x += (clampedTargetX - camera.position.x) * 0.05;
            camera.position.y += (clampedTargetY - camera.position.y) * 0.05;
    
            camera.lookAt(scene.position);
    
            renderer.render(scene, camera);
        };

        animate();

        return () => {
        document.removeEventListener('mousemove', handleMouseMove, false);
        };
  }, []);

  return <div className="canvas-container" ref={containerRef} />;
};

export default ThreeScene;
