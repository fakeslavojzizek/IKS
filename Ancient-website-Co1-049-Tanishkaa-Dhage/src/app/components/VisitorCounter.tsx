import { useState, useEffect } from 'react';

export function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate getting visitor count
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 9000) + 1000;
    const newCount = currentCount + 1;
    
    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);

    // Animate the counter
    let current = 0;
    const interval = setInterval(() => {
      if (current < newCount) {
        current += Math.ceil((newCount - current) / 10);
        setCount(Math.min(current, newCount));
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const digits = count.toString().padStart(6, '0').split('');

  return (
    <span className="hit-animation inline-flex">
      {digits.map((digit, index) => (
        <span key={index} className="counter-digit">
          {digit}
        </span>
      ))}
    </span>
  );
}
