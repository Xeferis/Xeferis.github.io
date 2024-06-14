var cursor = document.querySelector('.cursor');
var h_elem = Array.from(document.querySelectorAll('p'));

function cursor(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}

window.addEventListener('DOMContentLoaded', cursor);
window.addEventListener('mousemove', cursor);

document.addEventListener('mousedown', function(e){
    cursor.classList.add("click");
  }
);

document.addEventListener('mouseup', function(e){
    cursor.classList.remove("click");
  }
);

document.addEventListener('mouseenter', function(e){
    cursor.style.opacity = 1;
  }
);

document.addEventListener('mouseleave', function(e){
    cursor.style.opacity = 0;
  }
);



h_elem.forEach(elem => {
    elem.addEventListener('mouseover', function(x) {
    cursor.classList.add('hover');
  })
//To remove the class when it doesn't hover the text
elem.addEventListener('mouseleave', function (x) {
    cursor.classList.remove('hover');
  })
});