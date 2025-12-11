import React, { useEffect, useRef } from 'react';

const customStyles = `
  /* Carousel scroll: moves -50% of the inner duplicated track for seamless looping */
  @keyframes carousel-scroll {
    from { transform: translateX(0); }
    to 	{ transform: translateX(-50%); }
  }

  /* Hero fade + slide up */
  @keyframes hero-fade-up {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .carousel-track {
    display: flex;
    width: 200%; /* duplicated content for smooth infinite scroll */
    animation: carousel-scroll 10s linear infinite;
    will-change: transform;
  }

  /* make logos center-contained and white */
  .logo-filter {
    filter: brightness(0) invert(1);
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* hero animation class */
  .hero-animated {
    animation: hero-fade-up 700ms cubic-bezier(.2,.9,.2,1) both;
  }

  /* Respect reduced motion preference: stop animations */
  @media (prefers-reduced-motion: reduce) {
    .carousel-track { animation: none !important; }
    .hero-animated { animation: none !important; opacity: 1 !important; transform: none !important; }
  }

  /* Mobile / very-small-screen tweaks */
  @media (max-width: 640px) {
    .hero-animated.text-3xl { font-size: 1.9rem !important; line-height: 1.1 !important; }
    .hero-animated.delay-1 { font-size: 1.05rem !important; max-width: 94% !important; line-height: 1.2 !important; }

    .carousel-track > div {
      width: 42% !important;
      min-width: 42% !important;
      max-width: 42% !important;
      height: 46px !important;
      padding-left: 4px !important;
      padding-right: 4px !important;
    }

    .logo-filter { max-height: 40px !important; max-width: 120px !important; }
  }

  @media (max-width: 340px) {
    .hero-animated.text-3xl { font-size: 1.7rem !important; }
    .hero-animated.delay-1 { font-size: 0.95rem !important; }
    .carousel-track { animation-duration: 12s !important; }
    .carousel-track > div { width: 48% !important; min-width: 48% !important; max-width: 48% !important; }
  }
`;

const logos = [
  "bdc1.svg", "bdc2.svg", "bdc3.svg", "bdc4.svg", "bdc5.svg",
  "bdc6.svg", "bdc7.svg", "bdc8.svg", "bdc9.svg", "bdc10.svg",
];

const ThreeJsBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let renderer, scene, camera, particleMesh, linesMesh, particles, lineGeometry, animateId;
    const particleCount = 300;
    const boundary = 200;
    const maxDistance = 30;
    const velocities = [];
    const maxLines = particleCount * 5;
    const linePositions = new Float32Array(maxLines * 2 * 3);

    const initializeThree = () => {
      if (!mountRef.current) return;
      
      if (typeof window.THREE === 'undefined') {
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.onload = () => { if (typeof window.THREE !== 'undefined') startScene(); };
        document.head.appendChild(script);
      } else {
        startScene();
      }
    };

    const startScene = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth || window.innerWidth;
      const height = mountRef.current.clientHeight || Math.max(window.innerHeight * 0.6, 300);

      scene = new window.THREE.Scene();
      camera = new window.THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);

      camera.position.z = 100;

      particles = new window.THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        // Start particles near center
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = Math.random() * 50 - 25;

        positions[i*3] = x; 
        positions[i*3+1] = y; 
        positions[i*3+2] = z;

        // Create velocity pointing outward from center
        const outwardVector = new window.THREE.Vector3(x, y, z);
        outwardVector.normalize().multiplyScalar(1.0 + Math.random() * 0.5);
        velocities.push(outwardVector);
      }
      particles.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));

      const material = new window.THREE.PointsMaterial({ 
        color: 0xffffff, 
        size: 1.6, 
        sizeAttenuation: true, 
        transparent: true, 
        blending: window.THREE.AdditiveBlending 
      });
      particleMesh = new window.THREE.Points(particles, material);
      scene.add(particleMesh);

      lineGeometry = new window.THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new window.THREE.BufferAttribute(linePositions, 3));
      const lineMaterial = new window.THREE.LineBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.08 
      });
      linesMesh = new window.THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);

      animate();
    };

    const animate = () => {
      if (!renderer || !particles) return;
      animateId = requestAnimationFrame(animate);
      const positionArray = particles.attributes.position.array;
      let lineIndex = 0;
      let activeLineCount = 0;

      for (let i = 0; i < particleCount; i++) {
        let x = positionArray[i*3], y = positionArray[i*3+1], z = positionArray[i*3+2];
        const velocity = velocities[i];
        
        x += velocity.x; 
        y += velocity.y; 
        z += velocity.z;
        positionArray[i*3] = x; 
        positionArray[i*3+1] = y; 
        positionArray[i*3+2] = z;

        const distanceToCenterSq = x*x + y*y + z*z;
        if (distanceToCenterSq < 100) {
          let newX, newY;
          if (Math.random() < 0.5) { 
            newX = Math.random() < 0.5 ? -boundary : boundary; 
            newY = Math.random() * boundary * 2 - boundary; 
          } else { 
            newX = Math.random() * boundary * 2 - boundary; 
            newY = Math.random() < 0.5 ? -boundary : boundary; 
          }
          const newZ = Math.random() * 50 - 25;
          positionArray[i*3] = newX; 
          positionArray[i*3+1] = newY; 
          positionArray[i*3+2] = newZ;
          
          const newCenterVector = new window.THREE.Vector3(-newX, -newY, -newZ);
          velocities[i] = newCenterVector.normalize().multiplyScalar(0.15 + Math.random()*0.2);
        }

        for (let j = i+1; j<particleCount; j++){
          const dx=x-positionArray[j*3], dy=y-positionArray[j*3+1], dz=z-positionArray[j*3+2];
          const distSq=dx*dx+dy*dy+dz*dz;
          if(distSq<maxDistance*maxDistance){
            linePositions[lineIndex++] = x; 
            linePositions[lineIndex++] = y; 
            linePositions[lineIndex++] = z;
            linePositions[lineIndex++] = positionArray[j*3]; 
            linePositions[lineIndex++] = positionArray[j*3+1]; 
            linePositions[lineIndex++] = positionArray[j*3+2];
            activeLineCount++;
            if(lineIndex>=linePositions.length-6) break;
          }
        }
      }

      particles.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, activeLineCount*2);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      const newW = mountRef.current.clientWidth || window.innerWidth;
      const newH = mountRef.current.clientHeight || Math.max(window.innerHeight*0.6, 300);
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    initializeThree();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if(animateId) cancelAnimationFrame(animateId);
      if(mountRef.current && renderer && renderer.domElement && renderer.domElement.parentNode===mountRef.current){
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const HomePage = () => { 
  const getLogoUrl = (filename) => `/${filename}`;

  // Notify parent that this is the home page (for navbar transparency)
  useEffect(() => {
    document.body.setAttribute('data-page', 'home');
    return () => {
      document.body.removeAttribute('data-page');
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#020815] to-[#040D21] text-white font-sans relative overflow-hidden -mt-20"> 
      <style>{customStyles}</style>

      <ThreeJsBackground />

      <main className="relative z-10 flex flex-col items-center justify-center text-center min-h-[75vh] pb-32 sm:pb-40 lg:pb-56"> 
        <div className="w-full px-4">
          <div className="max-w-4xl h-[100%] flex flex-col justify-center items-center mx-auto">
            <h1 className="hero-animated pt-52 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight tracking-tight">
              Big on Data Science & AI
            </h1>
            <p className="hero-animated delay-1 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light max-w-2xl mx-auto mt-2" style={{ animationDelay: '200ms' }}>
              Empowering your business with data science and AI technology — practical, scalable, and tailored to real outcomes.
            </p>
          </div>
        </div>
      </main>

      <section className="relative z-10 py-4 sm:py-6 overflow-hidden">
        <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto border-t border-gray-800 pt-4">
          <div className="w-full overflow-hidden">
            <div className="carousel-track">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className={
                    "flex-shrink-0 px-2 py-2 " +
                    "w-1/3 sm:w-1/4 md:w-1/5 lg:w-[10%] h-10 sm:h-12 flex items-center justify-center"
                  }
                >
                  <img
                    src={getLogoUrl(logo)}
                    alt={`Client Logo ${index % logos.length + 1}`}
                    className="logo-filter"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/160x48/000000/FFFFFF?text=Logo+${(index % logos.length) + 1}`;
                      e.target.style.filter = 'none';
                      e.target.className = 'opacity-60';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10" />
    </div>
  );
};

export default HomePage;