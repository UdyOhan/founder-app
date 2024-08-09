'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function LocationTextAnimation() {

    const textsRef = useRef<HTMLLIElement[]>([]);

    useEffect(() => {
      const tl = gsap.timeline({ repeat: -1,});
  
      textsRef.current.forEach((text, index) => {
        const nextIndex = (index) % textsRef.current.length;
        const isFirst = nextIndex === 0;

        tl.fromTo(
          text,
          { y: isFirst? '-100%' : '100%', duration: 0.1},
          { y: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' },
          index * 1 // Staggering each animation
        ).to(
          text,
          { y: '-100%', duration: 0.1, ease: 'power2.in' },
          index * 1 + 0.9 // Exit after showing
        );
      });
    }, []);

    return(
    <ul>
          {['Abuja', 'Kaduna', 'Kano'].map((text, index) => (
          <li
            className="absolute"
            key={index}
            ref={(el) => {
              if (el) textsRef.current[index] = el;
            }}
          >
            {text}
          </li>
        ))}
    </ul>
    )
}