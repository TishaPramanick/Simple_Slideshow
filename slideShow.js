const imgArray = ["nature3.jpg","paint1.jpeg","nature4.jpg","pea1.avif"];
const imgPath = "C:\\image\\";
const leftBtn = document.getElementById('leftArrow');
const rightBtn = document.getElementById('rightArrow');

let image = document.getElementById('image')
let radioBtn = document.getElementById('roundBtn').children;
let x;
let i = 0;
let j ;



console.log(radioBtn)
console.log(image.src)
function autoSlideShow()
{
  if(i < imgArray.length)
  {
    
    image.src = imgPath+imgArray[i]; 
    
   
    radioBtn[i].style.backgroundColor = "yellow";
    if(i > 0 )
    {
        j = i-1;
        radioBtn[j].style.backgroundColor = "white";
    }
    else
    {
        radioBtn[3].style.backgroundColor = "white";
    }
    i++;
        
  }
  else
  {
    i = 0;
  }
}

function colorRoundBtn(y)
{
  let i = 0;
  while(i < radioBtn.length)
  {
    if(y == i)
    {
      radioBtn[i].style.backgroundColor = "yellow";
    }
    else
    {
      radioBtn[i].style.backgroundColor = "white";
    }
    i++;
  }
}

leftBtn.addEventListener('click',()=>{
    a = image.src;
    b = a.substring(a.lastIndexOf('/') + 1)
    if(imgArray.indexOf(b) == 0)
    {
      image.src = imgPath+imgArray[imgArray.length - 1];
      colorRoundBtn(imgArray.length - 1)
     
    }
    else 
    {
      image.src = imgPath+imgArray[imgArray.indexOf(b) - 1];
      colorRoundBtn(imgArray.indexOf(b) - 1)
      
    }
     
    
})
rightBtn.addEventListener('click',()=>{
  a = image.src;
  b = a.substring(a.lastIndexOf('/') + 1)

  if(imgArray.indexOf(b) == imgArray.length - 1)
  {
    image.src = imgPath+imgArray[0];
    colorRoundBtn(0)
  }
  else 
  {
    image.src = imgPath+imgArray[imgArray.indexOf(b) + 1];
    colorRoundBtn(imgArray.indexOf(b) + 1);
  }   
  
})

for(let i = 0;i<radioBtn.length;i++)
{
  radioBtn[i].addEventListener('click',()=>{
    if(radioBtn[i].checked)
    {
      image.src = imgPath+imgArray[i];
      colorRoundBtn(i)
    }
})
}






// setInterval(slideShow,2000)