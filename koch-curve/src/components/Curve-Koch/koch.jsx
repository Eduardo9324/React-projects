import React, { useEffect, useRef } from "react";

const KochCurve = () => {
  // Se hace referencia a un elemento del DOM
  const refCanvas = useRef(null);

  useEffect(() => {
    // Se asigna a la constante el valor actual de referencia
    const canvas = refCanvas.current;
    // Aqui se inicializa un contexto de dibujo en lienzo bidimencional
    const ctx = canvas.getContext("2d");
    // Esta funsion dibuja la curva de forma geometrica, el primer arg es el contexto de dibujo, el 2 y 3 corresponden al eje X, y el 4 y 5 al eje Y, el ultimo arg es un valor entero que representa el nivel de complejidad de la curva
    kochCurveDraw(ctx, 100, 200, 500, 200, 5);
    ctx.stroke();
  }, []);

  const kochCurveDraw = (ctx, x1, y1, x2, y2, depth) => {
    if (depth === 0) {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      return;
    };

    // Calcula la distancia entre dos puntos del plano
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    // Saca la raiz cuadrada de la suma del cuadrado de los puntos (TEOREMA DE PITACOGAS)
    const dist = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));


    const unitX = deltaX / dist;
    const unitY = deltaY / dist;
    const length = dist / 3;


    const p1x = x1 + (unitX * length);
    const p1y = y1 + (unitY * length);


    const cos60 = Math.cos(Math.PI / 3);
    const sin60 = Math.sin(Math.PI / 3);


    const p2x = p1x + (unitX * cos60 * length) - (unitY * sin60 * length);
    const p2y = p1y + (unitX * sin60 * length) + (unitY * cos60 * length);


    const p3x = x1 + (2 * unitX * length);
    const p3y = y1 + (2 * unitY * length);


    kochCurveDraw(ctx, x1, y1, p1x, p1y, depth - 1);
    kochCurveDraw(ctx, p1x, p1y, p2x, p2y, depth - 1);
    kochCurveDraw(ctx, p2x, p2y, p3x, p3y, depth - 1);
    kochCurveDraw(ctx, p3x, p3y, x2, y2, depth - 1);
  };

  return <canvas ref={refCanvas} width={600} height={400} />;
};

export default KochCurve;