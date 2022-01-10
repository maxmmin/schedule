function switchcard() {
  var mass = document.querySelectorAll('.card')
  var valuemass = document.querySelectorAll('.card_heading')
  var toparrow = document.querySelector('.modal_left-ar') 
  var bottomarrow = document.querySelector('.modal_right-ar')
  var index = undefined;
  var text1 = document.querySelector('.modal_text')
  var text2 = document.querySelector('.modal_text_sec')
  var cardhead = document.querySelectorAll('.card_heading')
  var time
  var audio = document.querySelector('.audio')
  var cont = document.querySelector('.container')
  
  function heig() {
    cont.style.minHeight = window.innerHeight+'px'
    addEventListener('resize',()=> {
      cont.style.minHeight = window.innerHeight+'px'
    })
  }

  window.addEventListener('1`resize',() => {
    heig()
  })
  heig()

  var n;
  function randomInteger(min, max) {
    console.log(n+'n')
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand)
    console.log(rand)
    
    
    
    return rand;
  }

  
  function background() {
    n = randomInteger(4,11)
    
    cont.style.backgroundImage = `url('img/m${n}.jpg')` 
    
  }

  background()

  function blame() {
    setTimeout(()=> {
      cardhead[index].style.backgroundColor = 'rgba(152,255,152,0.5)'

      setTimeout( () => {
        cardhead[index].style.backgroundColor = 'rgba(152, 255 ,152 , 0 )'} ,  280)
     },time)
     
     
  }

      mass.forEach(function (element,ind) {
          if (element.classList.contains('recent')) {index=ind}  
      })
  
      text1.innerHTML = valuemass[index].textContent
      text2.innerHTML = valuemass[index+1].textContent

      text1.style.opacity = '1'
       text2.style.opacity = '1'

  bottomarrow.addEventListener('click', () =>{
      audio.play()  
  

      if(toparrow.classList.contains('ad')) {
        toparrow.classList.remove('ad')
      }

      time = 300

      if((index+1)==mass.length) {
        time = 0;
        
        blame();
        return}

        
      mass[index].classList.remove('recent')
      mass[index].classList.add('recbefore')
      
     
      index=index+1
         
       mass[index].classList.remove('recnext')
       mass[index].classList.add('recent')
       
       

       text1.innerHTML = valuemass[index-1].textContent
       if ((index+1)!=valuemass.length) {text2.innerHTML = valuemass[index+1].textContent;}

       if ((index+1)==valuemass.length) {
         bottomarrow.classList.add('ad')
       }
       text1.style.opacity = '1'
       text2.style.opacity = '1'

       blame()
       
       
  })

  toparrow.addEventListener('click', () =>{
    audio.play() 
    

    if(bottomarrow.classList.contains('ad')) {
      bottomarrow.classList.remove('ad')
    }
    time = 300

    if (index<=1) {
      toparrow.classList.add('ad')
    }

      if (index==0) {
        time=0
        
        blame()
        return}
      mass[index].classList.remove('recent')
      mass[index].classList.add('recnext')
      
      index=index-1        

      mass[index].classList.remove('recbefore')
      mass[index].classList.add('recent')

      
      if (index==0) {
        text2.innerHTML = valuemass[index+1].textContent
      }
  
      if (index!=0) {
      text1.innerHTML = valuemass[index-1].textContent
       text2.innerHTML = valuemass[index+1].textContent
      } 
    
      
     blame()
     

  })

  function media() {
   
    let steve = document.querySelector('.steve')

    var clickFunction = function (event) {
    
            
      let steve = document.querySelector('.steve')
      let sound = document.querySelector('.menu_sound')
      sound.src = "sound/menusound.mp3"
      sound.play()
      steve.removeEventListener('click',clickFunction, false );

};

    
    steve.classList.add('on')
    steve.addEventListener('click',function go() {
        steve.classList.add('steveclick')
        
        steve.addEventListener("click", clickFunction, false);
          
          
          
        
    })
  }
  
  setInterval(media, 20000);  

  
}

window.onload = switchcard
