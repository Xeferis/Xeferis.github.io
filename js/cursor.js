var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
  cursor.classList.remove("hover")
  var x = e.clientX;
  var y = e.clientY;
  cursor.styleopacity = 1;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}
);

document.addEventListener('mousedown', function(e){
    cursor.classList.add("click")
  }
);

document.addEventListener('mouseup', function(e){
    cursor.classList.remove("click")
  }
);

document.addEventListener('mouseout', function(e){
    cursor.style.opacity = 0;
  }
);

document.addEventListener('mouseenter', function(e){
    cursor.style.opacity = 1;
  }
);

document.addEventListener('mouseover', function(e){
    cursor.classList.add("hover")
  }
);