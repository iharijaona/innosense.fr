"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"


const caretAnimations = { hidden: { opacity: 0 },  show: { opacity: 1 } }


interface IGridItemProps {
  x: number;
  y: number;
  animate?: object;
  transition?: object;
  onAnimationComplete?: () => void ;
}

const GridItem = (props: IGridItemProps) => {

  return (
  <motion.path 
    transform={`translate(${-32 * props.y + 96 * props.x} ${160 * props.y})`} 
    d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
    animate={props.animate}
    transition={props.transition}
    onAnimationComplete={props.onAnimationComplete}
    >
    </motion.path>
  )
}

const GridPattern = () => {

  const svgRef = useRef<SVGSVGElement>(null);

  const caretPos = useRef<number[]>();

  const lastMoveId = useRef<number>(0);

  const [animatedGrids, setAnimatedGrids] = useState<number[][]>([])

  const yOffset = -96;


  

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (!svgRef.current)
          return;
  
      let svgRect = svgRef.current.getBoundingClientRect();
      let xCur = event.clientX - svgRect.left;
      let yCur = event.clientY - svgRect.top;
  
      if (xCur < 0 || yCur < 0 || xCur > svgRect.width || yCur > svgRect.height)
        return;
  
      xCur = xCur - (svgRect.width / 2) - 32;
      yCur -= yOffset;
      xCur += Math.tan(.2) * yCur;
      xCur = Math.floor(xCur / 96);
      yCur = Math.floor(yCur / 160);
  
      if (!caretPos.current || (caretPos.current && (caretPos.current[0] !== xCur || caretPos.current[1] !== yCur))) {
        caretPos.current = [xCur, yCur];
      }
  
      setAnimatedGrids((grids) => {
        let moveId = lastMoveId.current++;
        return [...grids, [xCur, yCur, moveId]].filter(item=>!(item[0] === xCur && item[1] === yCur && item[2] !== moveId))
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }

  }, [yOffset])

  return (
    <svg ref={svgRef} className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
      <rect width="100%" height="100%" fill="url(#:R1lda:)" strokeWidth="0"></rect>
      <svg x="50%" y={yOffset} strokeWidth="0" className="overflow-visible">
        {[[1, 1], [2, 2], [4, 3], [6, 2], [7, 4], [5, 5]].map((grid, index) => <GridItem key={index} x={grid[0]} y={grid[1]} />)}
        {animatedGrids.map((grid) => (
          <GridItem 
            key={grid[2]} 
            x={grid[0]} 
            y={grid[1]}  
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, times: [0, 0, 1] }}
            onAnimationComplete={()=>{setAnimatedGrids(grids => grids.filter(item => item[2] !== grid[2]))}} />)
        )}
      </svg>
      <defs>
        <pattern id=":R1lda:" width="96" height="480" x="50%" patternUnits="userSpaceOnUse" patternTransform={`translate(0 ${yOffset})`} fill="none">
          <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
        </pattern>
      </defs>
    </svg>
  );
};

export default GridPattern;
