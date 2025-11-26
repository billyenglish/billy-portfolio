import { useState, useEffect, createContext, useContext } from "react";

const MouseTracker = () => {

    interface MousePosition {
        x: number;
        y: number;
    }

    const [mouseTracker, setMouseTracker] = useState<MousePosition>({ x: 0, y: 0 });

    const handleMousePosition = (e: MouseEvent) => {
        useEffect(() => {
            setMouseTracker({
                x: e.clientX,
                y: e.clientY
            })
        })
    }

    return (
        <>
        </>
    );
};

export default MouseTracker;