import React, { useRef, useEffect } from 'react';

const CarCanvas = ({ imageSrc, color }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const carImage = new Image();
    carImage.src = imageSrc;
    carImage.crossOrigin = "anonymous";

    carImage.onload = () => {
      // Resize canvas to image size
      canvas.width = carImage.width;
      canvas.height = carImage.height;

      // Draw original image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(carImage, 0, 0);

      // Apply color overlay (multiply blend)
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reset blend mode
      ctx.globalCompositeOperation = 'source-over';
    };
  }, [imageSrc, color]);

  return <canvas ref={canvasRef} style={{ width: '80%', height: 'auto' }} />;
};

export default CarCanvas;
