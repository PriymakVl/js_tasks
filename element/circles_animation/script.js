const colors = ['#54097F','#96d3fd','#c996fd'];

document.onmousemove = animateCircles;

function animateCircles(event) {
  let circle = document.createElement("div");
  circle.classList.add('circle');
  document.body.appendChild(circle);
  
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';
  
  let color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;
}