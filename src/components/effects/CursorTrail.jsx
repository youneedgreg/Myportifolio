'use client';

import { useEffect, useState } from 'react';

const CursorTrail = () => {
    const [trail, setTrail] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setTrail((prev) => {
                const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
                if (newTrail.length > 20) {
                    return newTrail.slice(1);
                }
                return newTrail;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {trail.map((point, index) => (
                <div
                    key={index}
                    className="absolute h-2 w-2 rounded-full bg-blue-500/50 dark:bg-blue-400/50"
                    style={{
                        left: point.x,
                        top: point.y,
                        transform: `scale(${1 - index / trail.length})`,
                        opacity: 1 - index / trail.length,
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail; 