let butt = document.getElementById('change-bg');

function setColor() {
    let coll = setInterval(function() {
        const colors = ['red', 'blue', 'green', 'orange'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor
        
    }, 10)
     
    
}

butt.addEventListener('click', function() {
    var gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '<img src="gif.gif" alt="GIF" style="width: 100%; height: 100%;">';
    gifContainer.style.display = 'block';
    
    setTimeout(function() {
      gifContainer.style.display = 'none';
      gifContainer.innerHTML = '';
    }, 3000);
  });
  


butt.addEventListener('click', setColor);