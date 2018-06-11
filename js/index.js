/**
 * Created by liguanghua on 2018/5/24.
 */
//搜索框联想
var sinput=document.getElementById("i-lscsi-input");
var sresult=document.getElementById("i-lscsi-sresult");
sinput.onfocus=function(){
    sresult.style.display="block";
}
sinput.onblur=function(){
    sresult.style.display="none";
}