import { useSpring, animated } from "@react-spring/web";
import React, { useRef, useEffect } from "react";
import "../style/contact.css";
import emailjs from "emailjs-com";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_svn9zv6",
        "template_0uo3giu",
        e.target,
        "DaUyAEjLp7DKILpRo"
      )
      .then(
        (result) => {
          alert("Mejlet har skickats!");
        },
        (error) => {
          alert("Något gick fel. Försök igen senare.");
        }
      );

    e.target.reset();
  };

  const parentRef = useRef(null);

  useAutoAnimate(parentRef);

  const text = "Kontakta mig gärna";

  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: { duration: 1450 },
    loop: true,
  });

  return (
    <section id="contact">
      <div className="contact" ref={parentRef}>
        <animated.h1
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .to({
                range: [0, 0.25, 0.5, 0.75, 1],
                output: [0.8, 1.2, 0.9, 1.1, 1],
              })
              .to((x) => `scale(${x})`),
          }}
        >
          {text}
        </animated.h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="reply_to" placeholder="Email" required />
          <input type="text" name="to_name" value="Your name" hidden />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
