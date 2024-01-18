import React, { useState, useEffect } from "react";
import '../style/intro.css';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaHtml5, FaPhp,} from 'react-icons/fa';

const Intro = () => {
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);


  const text = ["Hej, jag heter Adam Hammadi", "Jag är en webbutvecklare"];


  const speed = 100;
  const blinkSpeed = 500;

  
  useEffect(() => {
    if (index === text.length) return;

    if (subIndex === text[index].length + 1 && index !== text.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, blinkSpeed);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return(
    <section id="home">
      <div className="intro">
        <h1>
          {`${text[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
        <button className="contact-button">
          <a href="#contact">Kontakta mig</a>
        </button>
        <button className="cv-button">
          <a href="Hammadi_Adam.pdf" target="_blank" rel="noopener noreferrer">Ladda ner CV</a>
        </button>
        <div className="icons">
          <div className="links">
          <a href="https://github.com/DARKLEGEND0406" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/adam-hammadi-998702242/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          </div>
          <div className="icons1">  
            <FaReact size={30} />
            <FaNodeJs size={30} />
            <FaHtml5 size={30} />
            <FaPhp size={30} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
