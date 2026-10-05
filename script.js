var b=document.querySelector('.burger'),n=document.querySelector('.main');
if(b){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var y=document.getElementById('y');if(y){y.textContent=new Date().getFullYear()}
