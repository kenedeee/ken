import React, { useState, useEffect } from "react";

export default function TypingEffect() {
  const texts = ["Full-Stack Developer", "Engineer", "Creator", "Innovator"];
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentText = texts[count];
    let typingSpeed = isDeleting ? 80 : 120;

    if (!isDeleting && index === currentText.length) {
      typingSpeed = 1200; // pause before deleting
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && index === 0) {
      setIsDeleting(false);
      setCount((prev) => (prev + 1) % texts.length);
      typingSpeed = 500; // pause before typing again
    }

    const timeout = setTimeout(() => {
      setText(currentText.substring(0, isDeleting ? index - 1 : index + 1));
      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, count]);

  return <p className="typing">{text}</p>;
}
