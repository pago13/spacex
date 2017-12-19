const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')
const numberParticle = 500
const stars = []


/* RESIZE */ 
const resize = () =>
{
  $canvas.width = window.innerWidth -2
  $canvas.height = window.innerHeight -2  //13800
}

  window.addEventListener('resize', resize)
  resize()

/* SPACE */ 
const space = () =>
{
  context.beginPath() 
  context.rect(0, 0, $canvas.width, ($canvas.height))
  context.fillStyle = ' rgba(11, 11, 11, 1)'
  context.fill()

}

const starsFunction = () =>
{
  for (let i = 0; i < numberParticle*2; i++) 
  {
    context.fillStyle= ' rgba(255, 255, 255, 0.5)'
    let x = (Math.random() * ($canvas.width))
    let y = (Math.random() * ($canvas.height))
    stars[i]= x
    stars[i+1]= y
    let speedRandom = Math.random()*0.5
    let sizeRandom = Math.random()*3
    stars[i+2]= speedRandom
    stars[i+3]= sizeRandom
    context.beginPath()
    context.arc(x, y, sizeRandom, 0, Math.PI*2)
    context.fill()
    i += 3
  }
}
starsFunction()

const starsFunctionAnim = () =>
{
  for (let i = 0; i < numberParticle*2; i++) 
  {
    if(stars[i+1] >= ($canvas.height))
    {
      stars[i+1] = 0
    }
    context.fillStyle= ' rgba(255, 255, 255, 0.5)'
    let x = stars[i] 
    let y = stars[i+1] + stars[i+2]
    stars[i]= x
    stars[i+1]= y
    context.beginPath()
    context.arc(x, y, stars[i+3], 0, Math.PI*2)
    context.fill()
    i += 3
  }
}




const tell = () => {
function handleStart(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
        
  for (var i=0; i<touches.length; i++) {
    ongoingTouches.push(touches[i]);
    var color = colorForTouch(touches[i]);
    zoom()  
  }
}
}












const ocean = () => 
{
  context.beginPath()
  context.fillStyle = ' rgb(0, 141, 223)'
  context.rect(0, $canvas.height-100, $canvas.width, 100  )
  context.fill()
  
}

/*var derniere_position_de_scroll_connue = 0;
var ticking = false;

function faitQuelquechose(position_scroll) {
  // faites quelque chose avec la position du scroll
  console.log('teststststst')
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if
      faitQuelquechose(derniere_position_de_scroll_connue);
      ticking = false;
    });
  }
  ticking = true;
}); */

/* scrool */ 
let currentZoom = 0
let mouse = 0

const zoom = (e) => {
  if ( e.deltaY > 0 && mouse <= 100) 
  {
    console.log('bas')
    mouse++
    
  } else if ( e.deltaY < 0 && mouse >= 0) 
  {
    console.log('haut')
    mouse--
  }
}
// Firefox
document.addEventListener("DOMMouseScroll", zoom)
// Chrome based navigator
document.addEventListener("mousewheel", zoom)

/*                     */
  
const loop = () =>
{
  window.requestAnimationFrame(loop)
  space()
  starsFunctionAnim()
  //ocean()
 // tell()
}

loop()

