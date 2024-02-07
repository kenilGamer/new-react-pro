import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleMouseOver = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 20, 0, 2 * Math.PI);
      ctx.fill();

      animationFrameId = requestAnimationFrame(() => handleMouseOver(event));
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      cancelAnimationFrame(animationFrameId);
    };

    window.addEventListener('mousemove', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        border: '1px solid #000',
        position: 'fixed',
        top: 0,
        left: 0,
        zindex: 1111,
      }}
    ></canvas>
  );
};

export default CanvasAnimation;
