const text="META WORLD!";
let deley=120;
let direction=1;
let index=0;

function typetext(){
    const typeelement=document.getElementById('typewriting');

    if(direction==1 && index< text.length)
    {
        typeelement.textContent+=text.charAt(index);
        index++;
    }
    else if(direction==-1 && index>=0)
    {
        typeelement.textContent=text.substring(0,index);
        index--;
    }
    else{
        direction*=-1;
    }

}
setInterval(typetext,deley);
typetext();