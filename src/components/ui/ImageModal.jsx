"use client";

import { useState, useEffect } from 'react';

export default function ImageModal({ src, alt, isOpen, onClose }) {
  if (!isOpen) return null;

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose} // Close modal when clicking outside the image
    >
      <div className="relative max-w-screen-lg max-h-screen-lg mx-4" onClick={e => e.stopPropagation()}> {/* Prevent modal close when clicking image container */}
        <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
        <button
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
} 