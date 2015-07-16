function Entity(image, clickFunction, extraStuff, id, x, y){
  this.img=image;
  this.click=clickFunction;
  this.id=id;
  this.ex=x;
  this.wy=y;
  this.init=function(){
    var item=document.createElement("IMG");
    item.id=this.id;
    item.src=this.img;
    item.style.position="absolute";
    item.style.left=this.ex;
    item.style.top=this.wy;
    item.visibilty="visible";
    item.onclick=this.click;
    document.getElementById("game").appendChild(item);
  };
  this.hideit=function(){
    document.getElementById(id).style.visibility=hidden
  };
  this.moveto=function(x, y){
    document.getElementById(this.id).style.left=this.ex;
    document.getElementById(this.id).style.top=this.wy;
  };
  this.extraStuff=extraStuff;
}
function initKey(){
  return new Entity("../images/key.png", function(){this.extraStuff.hasKey=true; this.hideit();}, {hasKey:false}, "key", "64px", "64px");
}
function initDoor(){
  return new Entity("../images/door.png", function(){if(key.extraStuff.haskey=true){window.alert("you win");}}, {hasKey:false}, "door", "128px", "128px");
}