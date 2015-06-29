var Level={
 door:undefined
 key:undefined
setup:function(dx,dy,kx,ky){door=trapdoor;key=Key;door.keyid=0;key.keyid=0;door.pos=Position(dx,dy);key.pos=Position(kx,ky);},
 check:function(){if(door.open){alert("You win!");}}
}
