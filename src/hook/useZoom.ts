'use client';

import { calcPourcent } from '@/helpers/zoom';
import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

export function useZoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorX, setCursorX] = useState<number | null>(null);
  const [cursorY, setCursorY] = useState<number | null>(null);

  const imagePourcentX = useMemo(() => {
    if (!imageRef.current || !cursorX) return null;
    const { offsetLeft, clientWidth } = imageRef.current;
    return calcPourcent(offsetLeft, clientWidth, cursorX);
  }, [cursorX]);

  const imagePourcentY = useMemo(() => {
    if (!imageRef.current || !cursorY) return null;
    const { offsetTop, clientHeight } = imageRef.current;
    return calcPourcent(offsetTop, clientHeight, cursorY);
  }, [cursorY]);

  const handleMouseEnter = useCallback(() => {
    cursorRef.current?.classList.remove('hidden');
  }, []);

  const handleMouseLeave = useCallback(() => {
    cursorRef.current?.classList.add('hidden');
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
    cursorRef.current?.style.setProperty(
      'background-position',
      `${imagePourcentX}% ${imagePourcentY}%`,
    );
    cursorRef.current?.style.setProperty('top', `${cursorY}px`);
    cursorRef.current?.style.setProperty('left', `${cursorX}px`);
  }, [cursorX, cursorY, imagePourcentX, imagePourcentY]);

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
