'use client';

import { useEffect, useState } from 'react';

export default function TypingEffect() {
  // Définition des types pour les variables d'état
  const words: string[] = ['Front-end', 'Back-end'];
  const [text, setText] = useState<string>(''); // Texte actuellement affiché
  const [wordIndex, setWordIndex] = useState<number>(0); // Index du mot actuel
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // Indicateur de suppression

  useEffect(() => {
    const current = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Vitesse de frappe

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1)); // Supprimer un caractère
      } else {
        setText((prev) => current.slice(0, prev.length + 1)); // Ajouter un caractère
      }

      // Lorsque le mot est complètement écrit
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause avant de commencer à supprimer
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length); // Passer au mot suivant
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed); // Lancer la fonction de typing
    return () => clearTimeout(timer); // Nettoyer le timer à la désactivation du composant
  }, [text, isDeleting, wordIndex, words]); // Les dépendances de useEffect

  return (
    <h1 className="text-xl text-white font-semibold">
      <span className="sec-tex">{text}</span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
}
