let loon = document.getElementById("loon");


window.requestAnimationFrame(ChangeOpacity)


function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    } catch (e){
        return false;
    }

}

const move = (e) =>{

    try{
        var x = !isTouchDevice() ? e.pageX : e.touches
        [0].pageX
        var y = !isTouchDevice() ? e.pageY : e.touches
        [0].pageY
    } catch(e){}

    loon.style.left = x + "px";
    loon.style.top = y -80 + "px";

  
}

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const anchor = loon
    const rect = anchor.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    move(e);
    
    console.log(loon.style.opacity, window.scrollY * 0.003)

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    loon.style.transform = `rotate(${90 + angleDeg}deg)`;

    if(window.scrollY * 0.003 < 1.9){
        loon.classList.add('show')
        
    }
    else if(window.scrollY * 0.003 > 1.9){
        loon.classList.add('show')

    }

    
});

document.addEventListener("touchmove", (e) => {
    if(dist > 100){
        move(e);
    }
  
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    loon.style.transform = `rotate(${90 + angleDeg}deg)`;
});

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180 / Math.PI; 
    return deg;
}

let moveVal = 0;

moveGallery = () => {
    moveVal = window.scrollY * 0.003;
    loon.style.opacity = moveVal;
    requestAnimationFrame(moveGallery)
}

function ChangeOpacity(){
    if(window.scrollY * 0.003 < 1.9){
        return loon.style.opacity = 0;
        
    }
    else if(window.scrollY * 0.003 > 1.9){
        return loon.style.opacity = 80;
        
        

    }
}



