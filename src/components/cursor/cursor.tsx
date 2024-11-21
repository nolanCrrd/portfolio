import React, {useEffect, useState, useRef} from 'react';

function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [isHovering, setIsHovering] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const targetPosition = useRef({x: 0, y: 0});
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            targetPosition.current = {x: e.clientX, y: e.clientY};
        }

        function handleMouseClick() {
            setIsClick(true);
            setTimeout(() => {
                setIsClick(false);
            }, 100);
        }

        function handleMouseOver() {
            setIsHovering(true);
        }

        function handleMouseOut() {
            setIsHovering(false);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick);

        const elements = document.querySelectorAll('li, a');
        elements.forEach((el) => {
            el.addEventListener('mouseover', handleMouseOver);
            el.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('click', handleMouseClick);
            elements.forEach((el) => {
                el.removeEventListener('mouseover', handleMouseOver);
                el.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    function animateCursor() {
        setCursorPosition((currentPosition) => {
            const deltaX = targetPosition.current.x - currentPosition.x;
            const deltaY = targetPosition.current.y - currentPosition.y;
            const smoothingFactor = 0.2;

            return {
                x: currentPosition.x + deltaX * smoothingFactor,
                y: currentPosition.y + deltaY * smoothingFactor,
            };
        });

        animationFrameId.current = requestAnimationFrame(animateCursor);
    }

    useEffect(() => {
        animateCursor();
    }, []);

    const cursorStyle: React.CSSProperties = {
        position: 'fixed',
        top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
        width: isClick ? '25px' : '20px',
        height: isClick ? '25px' : '20px',
        backgroundColor: 'transparent',
        border: 'solid 1px black',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'transform 0.2s, width 0.05s, height 0.05s',
        transform: `translate(-50%, -50%) ${isHovering ? 'rotate(45deg)' : 'rotate(0deg)'}`,
    };

    return <div style={cursorStyle} className={'cursor'}/>;
}

export default CustomCursor;