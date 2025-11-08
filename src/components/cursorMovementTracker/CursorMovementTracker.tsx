import { Box } from "@mui/material"
import { ReactNode, useState } from "react"

export const CursorMovementTracker = ({render, children}:{render: ({x,y}: {x:number,y:number}) => ReactNode, children: ReactNode}) => {
    const [coordinates, setCoordinates] = useState({ x: 100, y: 200 })
    const handleMouseMove = (e: any) => {
        setCoordinates({ x: e.clientX, y: e.clientY })
    }
   
    return (
        <Box
            height={100}
            onMouseMove={handleMouseMove}
        >
            {render({x: coordinates.x, y: coordinates.y})}
            {children}
        </Box>
    )
};