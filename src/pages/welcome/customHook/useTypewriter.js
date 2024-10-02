import { useState,useEffect } from "react";

 export const useTypewriter = (fullTexts, speed) => {
    const [currentText, setCurrentText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        const text = fullTexts[currentLine];
  
        if (currentIndex < text.length) {
          setCurrentText(currentText + text.charAt(currentIndex));
          setCurrentIndex(currentIndex + 1);
        } else if (currentLine < fullTexts.length - 1) {
          setCurrentLine(currentLine + 1);
          setCurrentIndex(0);
          setCurrentText('');
        }
      }, speed);
  
      return () => clearTimeout(timer);
    }, [currentText, currentLine, currentIndex, fullTexts, speed]);
  
    return { currentText, currentLine };
  };