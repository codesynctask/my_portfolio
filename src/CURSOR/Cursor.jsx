import React, { useRef } from 'react'
  import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



function Cursor(props) {
  // getting ref
  const PARENT_REF = props.parent_ref;
  const CURSOR_REF = useRef(null)
  // console.log(props.parent_ref.current)
  // function handleMouseMove(cursor_parent) {

  //   console.log(cursor_parent)
  //   console.log("hello")
  // }

  console.log(PARENT_REF)

  function handleClick(e){
    console.log(`${e.x} | ${e.y}`)
    const { clientX, clientY } = e;

    // Use GSAP to animate the follower's position
    gsap.to(CURSOR_REF.current, {
      x: clientX - 60, // Offset by half the width/height to center the div
      y: clientY - 60,
      duration: 0.3,
      ease: "power3.out"
    });

  }
  PARENT_REF.addEventListener('mousemove', handleClick);

  

  return (
    <div className="relative" ref={CURSOR_REF}>
    <div className='size-[20vh]   border-2 rounded-full absolute z-40'></div>
    /</div>
  )
}

export default Cursor