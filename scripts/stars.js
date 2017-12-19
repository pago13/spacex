const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')
const numberParticle = 300
const stars = []

/* RESIZE */ 
const resize = () =>
{
  $canvas.width = window.innerWidth
  $canvas.height = window.innerHeight*15
}

  window.addEventListener('resize', resize)
  resize()

/* SPACE */ 
const space = () =>
{
  context.beginPath() 
  context.rect(0, 0, $canvas.width, ($canvas.height/15)*4)
  context.fillStyle = ' rgba(11, 11, 11, 1)'
  context.fill()

}

const starsFunction = () =>
{
  for (let i = 0; i < numberParticle*2; i++) 
  {
    context.fillStyle= ' rgba(255, 255, 255, 1)'
    let x = (Math.random() * ($canvas.width))
    let y = (Math.random() * ($canvas.height/15)*4)
    stars[i]= x
    stars[i+1]= y
    context.beginPath()
    context.arc(x, y, 1, 0, Math.PI*2)
    context.fill()
    i++
  }
}
starsFunction()

const starsFunctionAnim = () =>
{
  for (let i = 0; i < numberParticle*2; i++) 
  {
    if(stars[i+1] >= ($canvas.height/15)*4-2)
    {
      stars[i+1] = 0
    }
    context.fillStyle= ' rgba(255, 255, 255, 1)'
    let x = stars[i] 
    let y = stars[i+1] + 0.2  
    stars[i]= x
    stars[i+1]= y
    context.beginPath()
    context.arc(x, y, 1, 0, Math.PI*2)
    context.fill()
    i++
  }
}


const loop = () =>
{
  window.requestAnimationFrame(loop)
  space()
  starsFunctionAnim()
}

loop()

