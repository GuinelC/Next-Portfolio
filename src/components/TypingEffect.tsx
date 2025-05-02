'use client';

import { useEffect, useMemo, useState } from 'react';

export default function TypingEffect() {
  const words = useMemo(() => ['Front-end', 'Back-end'], []);
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const typingSpeed = isDeleting ? 100 : 200; // ← 
    const pauseBeforeDelete = 1000;

    const handleTyping = () => {
      setText((prevText) =>
        isDeleting ? prevText.slice(0, -1) : current.slice(0, prevText.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <div className="text-xl typing text-white font-semibold inline">
      <span className="text-xl text-white font-semibold">{text}</span>
      <p className="blinking-cursor">|</p>
    </div>
  );
}
