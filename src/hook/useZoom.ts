'use client';

import { calcImagePourcentX, calcImagePourcentY } from '@/helpers/zoom';
import {
  useCallback, useEffect, useRef,
} from 'react';

export function useZoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    cursorRef.current?.classList.remove('hidden');
  }, []);

  const handleMouseLeave = useCallback(() => {
    cursorRef.current?.classList.add('hidden');
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!imageRef.current || !cursorRef.current) return;

    const { clientX, clientY } = e;
    const imagePourcentX = calcImagePourcentX(imageRef.current, clientX);
    const imagePourcentY = calcImagePourcentY(imageRef.current, clientY);

    cursorRef.current?.style.setProperty(
      'background-position',
      `${imagePourcentX}% ${imagePourcentY}%`,
    );
    cursorRef.current?.style.setProperty('top', `${clientY}px`);
    cursorRef.current?.style.setProperty('left', `${clientX}px`);
  }, [cursorRef, imageRef]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    }
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);

  return {
    containerRef,
    imageRef,
    cursorRef,
  };
}
