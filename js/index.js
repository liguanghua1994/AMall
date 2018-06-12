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

var sinput2=document.getElementById("i-lscsi-input2");
var sresult2=document.getElementById("i-lscsi-sresult2");
sinput2.onfocus=function(){
    sresult2.style.display="block";
}
sinput2.onblur=function(){
    sresult2.style.display="none";
}

//页面滚动到第二屏时显示搜索框
var fixedSearch=document.getElementById("i-fixed-search-wrapper");
document.onscroll=function(){
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight=document.body.clientHeight || document.documentElement.clientHeight;
    if(scrollTop>=200){
        fixedSearch.style.display="block";
    }else{
        fixedSearch.style.display="none";
    }
}