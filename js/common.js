/**
 * Created by liguanghua on 2018/6/15.
 */
//
var gotop=document.getElementById("global-gotop");
gotop.onclick=function(){
    var top=document.body.scrollTop || document.documentElement.scrollTop;
    if(top>0){
        var timer=setInterval(function(){
            top=top/2;
            document.body.scrollTop=document.documentElement.scrollTop=top;
            if(top<1){
                document.body.scrollTop=document.documentElement.scrollTop=0;
                clearInterval(timer);
            }
        },1);
    }
}