document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const centerX = w / 2;
      const centerY = h / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

      const thresholdPercentage = 0.2; // 10% des maximalen Abstands als Schwellenwert

      const thresholdDistance = maxDistance * thresholdPercentage;
      let percentageDistance;

      if (distance < thresholdDistance) {
          percentageDistance = 1; // 100% innerhalb des Schwellenwerts
      } else {
          percentageDistance = 1 - (distance / maxDistance);
      }


      const dampingFactor = 1; // Je höher der Wert, desto schneller nimmt der Abstand ab
      const dampedPercentageDistance = Math.pow(percentageDistance, dampingFactor);

      cursor.style.opacity = dampedPercentageDistance;


      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mouseleave', (e) => { 
      cursor.style.opacity = 0;
    });
  
    document.addEventListener('mouseover', (e) => {
      cursor.style.opacity = 1;
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.tagName === 'P') {
        cursor.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
      }
    });
  });
  