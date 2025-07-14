"use client";

import React, { useState, useRef, useEffect, JSX } from 'react';
import { useTranslations } from 'next-intl';

export default function Drag(): JSX.Element {
  const t = useTranslations('portfolio');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchMove = (e: TouchEvent): void => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchEnd = (): void => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  return (
    <div className='lg:w-[50%]'>
      <div className='relative w-[500px] lg:w-[700px]'>
        <div
          ref={containerRef}
          className='relative overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none touch-none'
          style={{ aspectRatio: '16/10', touchAction: 'none' }}
        >
          {/* Imagem ANTES */}
          <div className='absolute inset-0'>
            <img className='w-full h-full object-cover' src="before-1.JPG" alt={t('beforeAlt')} draggable={false} />
            <div className='absolute left-8 top-1/2 -translate-y-1/2 -rotate-90'>
              <span className='text-white text-xl font-bold tracking-[0.3em] uppercase drop-shadow-lg'>
                {t('before')}
              </span>
            </div>
          </div>

          {/* Imagem DEPOIS */}
          <div
            className='absolute inset-0 transition-all duration-75 ease-out'
            style={{ clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)` }}
          >
            <img className='w-full h-full object-cover' src="after-1.JPG" alt={t('afterAlt')} draggable={false} />
            <div className='absolute right-8 top-1/2 -translate-y-1/2 rotate-90'>
              <span className='text-white text-xl font-bold tracking-[0.3em] uppercase drop-shadow-lg'>
                {t('after')}
              </span>
            </div>
          </div>

          {/* Linha divisória */}
          <div className='absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-75 ease-out' style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-4 border-p1 text-P2Brown cursor-ew-resize flex items-center justify-center hover:scale-110 transition-transform duration-200 touch-none'
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{ touchAction: 'none' }}
            >
              <div className='flex space-x-1'>
                <div className='w-1 h-4 bg-P2Brown rounded-full'></div>
                <div className='w-1 h-4 bg-P2Brown rounded-full'></div>
              </div>
              {/* Setas */}
              <div className='absolute -left-6 top-1/2 -translate-y-1/2 text-P2Brown'>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H3.707l2.146 2.147a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H14.5A.5.5 0 0 1 15 8z" />
                </svg>
              </div>
              <div className='absolute -right-6 top-1/2 -translate-y-1/2 text-P2Brown'>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Badge central */}
          <div className='absolute top-6 left-1/2 -translate-x-1/2 z-20'>
            <div className='bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-BrowS'>
              <span className='text-P2Brown font-semibold text-sm tracking-wider uppercase'>
                {t('drag')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
