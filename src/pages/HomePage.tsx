import { useEffect, useRef } from "react";

function typeWriter(element: HTMLElement, text: string, speed: number) {
  let i = 0;
  element.textContent = ""; //Gotta ensure its cleared before we start typing
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i++);
    } else {
      clearInterval(interval);
    }
  }, speed);
  return () => clearInterval(interval); // Cleanup function to clear the interval if the component unmounts
}

function HomePage() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const cleanup = typeWriter(headerRef.current, "Hello, and welcome.", 111);
      return cleanup; // Cleanup the interval on unmount
    }
  }, []);
  
  return (
    <main>
      <h1 ref={headerRef} className="text-4xl font-bold text-center"></h1>
      <p className="text-center mt-4 text-lg">This is a simple portfolio site to showcase my projects, introduce myself, and a learning experience for myself.</p>
    </main>
  );
};

export default HomePage;
