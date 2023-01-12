import "./Section.css";
import { useEffect, useRef, useState } from "react";

function Section(props) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <section
      id={props.id}
      className={`fade-in ${isVisible ? "visible" : ""}`}
      ref={domRef}
    >
      <div>
        <div className="section-header">
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 12.134C22.1667 12.5189 22.1667 13.4811 21.5 13.866L2 25.1244C1.33333 25.5093 0.500001 25.0281 0.500001 24.2583L0.500002 1.74167C0.500002 0.971868 1.33334 0.490743 2 0.875644L21.5 12.134Z"
              fill="#2CA796"
            />
          </svg>
          <h3>{props.title}</h3>
        </div>
        {props.children}
      </div>
    </section>
  );
}

export default Section;
