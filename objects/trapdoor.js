var trapdoor={
 open:false,
 keyid:undefined,
 opens:function(key){if(key==this.keyid){this.open=true; return true;}},
 pos:undefined//Construct this with the position(x,y) object constructor.
};
