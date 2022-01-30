
const RandomColor = "#"+((1<<24)*Math.random()|0).toString(16);
document.documentElement.style.setProperty('--main-bg-color', RandomColor)

const Sorus = document.getElementById('Iss')
console.log(RandomColor)
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 999999999)


  
  if(rndInt == 1) {
Sorus.remove();
  }