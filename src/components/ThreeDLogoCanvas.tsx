"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeDLogoCanvasProps {
  stage: 1 | 2 | 3;
  onAnimationComplete?: () => void;
  interactive?: boolean;
}

export default function ThreeDLogoCanvas({
  stage,
  onAnimationComplete,
  interactive = true,
}: ThreeDLogoCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stateRef = useRef({ stage });

  useEffect(() => {
    stateRef.current.stage = stage;
  }, [stage]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 9.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;

    container.replaceChildren(renderer.domElement);

    // Root Group for the 3-Sided 3D Pyramid
    const pyramidRoot = new THREE.Group();
    scene.add(pyramidRoot);

    // Load textures for the 3 images on the 3 sides of the pyramid
    const textureLoader = new THREE.TextureLoader();
    const textureProject = textureLoader.load("/images/project_building_3d.jpg");
    const textureTrainer = textureLoader.load("/images/female_trainer_3d.jpg");
    const textureMarketing = textureLoader.load("/images/digital_marketing_3d.jpg");

    // Configure texture color space & filtering for crystal clear, vibrant color
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    [textureProject, textureTrainer, textureMarketing].forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.anisotropy = maxAnisotropy;
    });

    // Helper: Create a prominent, colorful & sharp 3D Face Part of the Pyramid
    const createPyramidFace = (
      texture: THREE.Texture,
      borderColor: number,
      angleY: number
    ) => {
      const faceGroup = new THREE.Group();

      const faceWidthTop = 0.55;
      const faceWidthBottom = 3.0;
      const faceHeight = 3.8;

      const geom = new THREE.BufferGeometry();
      const hwB = faceWidthBottom / 2;
      const hwT = faceWidthTop / 2;
      const hh = faceHeight / 2;

      const vertices = new Float32Array([
        -hwB, -hh, 0,
         hwB, -hh, 0,
         hwT,  hh, 0,
        -hwT,  hh, 0,

        -hwB, -hh, -0.02,
         hwB, -hh, -0.02,
         hwT,  hh, -0.02,
        -hwT,  hh, -0.02,
      ]);

      const indices = [
        0, 1, 2,  0, 2, 3,
        6, 5, 4,  7, 6, 4
      ];

      const uvs = new Float32Array([
        0.02, 0.05,
        0.98, 0.05,
        0.85, 0.95,
        0.15, 0.95,

        0.02, 0.05,
        0.98, 0.05,
        0.85, 0.95,
        0.15, 0.95,
      ]);

      geom.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      geom.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
      geom.setIndex(indices);
      geom.computeVertexNormals();

      const faceMat = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.05,
        roughness: 0.15,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0xffffff),
        emissiveMap: texture,
        emissiveIntensity: 0.38,
      });

      const mesh = new THREE.Mesh(geom, faceMat);
      faceGroup.add(mesh);

      const edges = new THREE.EdgesGeometry(geom);
      const edgeMat = new THREE.LineBasicMaterial({
        color: borderColor,
        linewidth: 4,
        transparent: true,
        opacity: 0.95,
      });
      const edgeLines = new THREE.LineSegments(edges, edgeMat);
      faceGroup.add(edgeLines);

      const radius = 1.35;
      faceGroup.position.set(
        Math.sin(angleY) * radius,
        0,
        Math.cos(angleY) * radius
      );
      faceGroup.rotation.y = angleY;
      faceGroup.rotation.x = 0.28;

      return {
        group: faceGroup,
        mesh,
        basePos: faceGroup.position.clone(),
        baseRot: faceGroup.rotation.clone(),
        angleY,
      };
    };

    // Construct 3 Sides
    const face1 = createPyramidFace(textureProject, 0x06b6d4, 0);
    const face2 = createPyramidFace(textureTrainer, 0xfacc15, (2 * Math.PI) / 3);
    const face3 = createPyramidFace(textureMarketing, 0xf43f5e, (4 * Math.PI) / 3);

    pyramidRoot.add(face1.group);
    pyramidRoot.add(face2.group);
    pyramidRoot.add(face3.group);

    // Core Crystal
    const coreCrystalGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreCrystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const coreCrystal = new THREE.Mesh(coreCrystalGeo, coreCrystalMat);
    pyramidRoot.add(coreCrystal);

    const coreWireGeo = new THREE.WireframeGeometry(coreCrystalGeo);
    const coreWireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const coreWire = new THREE.LineSegments(coreWireGeo, coreWireMat);
    pyramidRoot.add(coreWire);

    // Orbiting Torus Rings
    const ring1Geo = new THREE.TorusGeometry(3.6, 0.045, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.9,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    pyramidRoot.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.0, 0.035, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x9333ea,
      emissiveIntensity: 0.9,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    pyramidRoot.add(ring2);

    // 3D Particles
    const particleCount = 260;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.0 + Math.random() * 5.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const isCyan = Math.random() > 0.5;
      particleColors[i * 3] = isCyan ? 0.1 : 0.9;
      particleColors[i * 3 + 1] = isCyan ? 0.9 : 0.4;
      particleColors[i * 3 + 2] = 1.0;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Bright Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const directLightFront = new THREE.DirectionalLight(0xffffff, 3.8);
    directLightFront.position.set(0, 4, 10);
    scene.add(directLightFront);

    const cyanLight = new THREE.PointLight(0x06b6d4, 6, 25);
    cyanLight.position.set(5, 4, 6);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 6, 25);
    purpleLight.position.set(-5, -4, 5);
    scene.add(purpleLight);

    const goldLight = new THREE.PointLight(0xfacc15, 5, 20);
    goldLight.position.set(0, 6, 4);
    scene.add(goldLight);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth) * 2 - 1;
      mouseY = -(e.clientY / innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // Fast, Crisp Animation Loop
    let clock = new THREE.Clock();
    let stage2StartTime: number | null = null;
    let stage2Completed = false;

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const currentStage = stateRef.current.stage;

      if (currentStage === 1) {
        // STEP 1: Fast, energetic rotation showing all 3 sides quickly
        pyramidRoot.rotation.y = elapsedTime * 1.6; // Faster smooth rotation
        pyramidRoot.rotation.x = Math.sin(elapsedTime * 0.8) * 0.14;
        pyramidRoot.position.y = Math.sin(elapsedTime * 2.0) * 0.12;
        camera.position.z = 9.2;

        [face1, face2, face3].forEach((f) => {
          f.group.position.copy(f.basePos);
          f.group.rotation.copy(f.baseRot);
          f.group.scale.set(1, 1, 1);
        });

        ring1.scale.set(1, 1, 1);
        ring2.scale.set(1, 1, 1);
      } else if (currentStage === 2) {
        // STEP 2: Fast, high-impact 3D Split Animation (1.5s duration)
        if (!stage2StartTime) {
          stage2StartTime = elapsedTime;
        }
        const stageProgress = Math.min((elapsedTime - stage2StartTime) / 1.5, 1.0);
        const ease = 1 - Math.pow(1 - stageProgress, 3);

        pyramidRoot.rotation.y += (0 - pyramidRoot.rotation.y) * 0.16;
        pyramidRoot.rotation.x += (0 - pyramidRoot.rotation.x) * 0.16;

        // PART 1 (Left Split)
        const targetX1 = -3.4 * ease;
        const targetZ1 = 0.5 * Math.sin(ease * Math.PI) + (1.2 * ease);
        face1.group.position.x = THREE.MathUtils.lerp(face1.basePos.x, targetX1, ease);
        face1.group.position.y = Math.sin(elapsedTime * 2.5) * 0.15;
        face1.group.position.z = THREE.MathUtils.lerp(face1.basePos.z, targetZ1, ease);
        face1.group.rotation.y = THREE.MathUtils.lerp(face1.baseRot.y, 0.45 + mouseX * 0.3, ease);
        face1.group.rotation.x = THREE.MathUtils.lerp(face1.baseRot.x, -mouseY * 0.2, ease);
        face1.group.scale.setScalar(1.0 + ease * 0.3);

        // PART 2 (Center Split)
        const targetX2 = 0;
        const targetY2 = 0.35 * ease + Math.sin(elapsedTime * 2.8) * 0.15;
        const targetZ2 = 2.6 * ease;
        face2.group.position.x = THREE.MathUtils.lerp(face2.basePos.x, targetX2, ease);
        face2.group.position.y = THREE.MathUtils.lerp(face2.basePos.y, targetY2, ease);
        face2.group.position.z = THREE.MathUtils.lerp(face2.basePos.z, targetZ2, ease);
        face2.group.rotation.y = THREE.MathUtils.lerp(face2.baseRot.y, 0 + mouseX * 0.2, ease);
        face2.group.rotation.x = THREE.MathUtils.lerp(face2.baseRot.x, 0 - mouseY * 0.2, ease);
        face2.group.scale.setScalar(1.0 + ease * 0.45);

        // PART 3 (Right Split)
        const targetX3 = 3.4 * ease;
        const targetZ3 = 0.5 * Math.sin(ease * Math.PI) + (1.2 * ease);
        face3.group.position.x = THREE.MathUtils.lerp(face3.basePos.x, targetX3, ease);
        face3.group.position.y = Math.sin(elapsedTime * 2.5 + 1.0) * 0.15;
        face3.group.position.z = THREE.MathUtils.lerp(face3.basePos.z, targetZ3, ease);
        face3.group.rotation.y = THREE.MathUtils.lerp(face3.baseRot.y, -0.45 + mouseX * 0.3, ease);
        face3.group.rotation.x = THREE.MathUtils.lerp(face3.baseRot.x, -mouseY * 0.2, ease);
        face3.group.scale.setScalar(1.0 + ease * 0.3);

        ring1.scale.setScalar(1.0 + ease * 0.6);
        ring2.scale.setScalar(1.0 + ease * 0.6);
        ring1.rotation.z += 0.1;
        ring2.rotation.z -= 0.1;

        coreCrystal.rotation.y += 0.06;
        coreCrystal.scale.setScalar(1.0 + Math.sin(elapsedTime * 6) * 0.2);

        if (stageProgress >= 1.0 && !stage2Completed) {
          stage2Completed = true;
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }
      } else if (currentStage === 3) {
        pyramidRoot.rotation.y = elapsedTime * 0.25 + mouseX * 0.2;
        pyramidRoot.rotation.x = -mouseY * 0.15;
        camera.position.z = 10.0;
      }

      ring1.rotation.x += 0.016;
      ring2.rotation.y += 0.014;
      particles.rotation.y = elapsedTime * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      coreCrystalGeo.dispose();
      coreCrystalMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
    };
  }, [stage, interactive, onAnimationComplete]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
