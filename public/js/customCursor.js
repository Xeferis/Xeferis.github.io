document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', (e) => {
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
  