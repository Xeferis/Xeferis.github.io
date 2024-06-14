var cursor = document.querySelector('.cursor');
var h_elem = Array.from(document.querySelectorAll('p'));

document.addEventListener('mousemove', function(e){
  cursor.classList.remove("hover");
  var x = e.clientX;
  var y = e.clientY;
  cursor.styleopacity = 1;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}
);

document.addEventListener('mousedown', function(e){
    cursor.classList.add("click");
  }
);

document.addEventListener('mouseup', function(e){
    cursor.classList.remove("click");
  }
);

document.addEventListener('mouseout', function(e){
    cursor.style.opacity = 0;
  }
);



h_elem.forEach(text => {
  text.addEventListener('mousemove', function() {
    cursor.classList.add('hover');
  })
//To remove the class when it doesn't hover the text
  text.addEventListener('mouseleave', function () {
    cursor.classList.remove('hover');
  })
})