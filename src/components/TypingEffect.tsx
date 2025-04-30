'use client';

import { useEffect, useState } from 'react';

export default function TypingEffect() {
  const words = ['Front-end', 'Back-end'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => current.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === current) {
        // Pause après avoir écrit le mot
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className="text-xl text-white font-semibold">
      <span className="sec-tex">{text}</span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
}
