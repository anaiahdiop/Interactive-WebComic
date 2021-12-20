let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
  
    innerCursor.style.left = `${mouseX}px`;
    innerCursor.style.top = `${mouseY}px`;
    outerCursor.style.left = `${mouseX}px`;
    outerCursor.style.top = `${mouseY}px`;

  });