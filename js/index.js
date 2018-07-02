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


//页面滚动到第二屏时显示搜索框
var fixedSearch=document.getElementById("i-lsc-wrapper");
window.onscroll=function(){
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight=document.body.clientHeight || document.documentElement.clientHeight;
    if(scrollTop>=200){
        fixedSearch.style.position="fixed";
        fixedSearch.style.left="0";
        fixedSearch.style.top="0";
        fixedSearch.style.backgroundColor="#fff";
        fixedSearch.style.width="100%";
        fixedSearch.style.zIndex="99";
        fixedSearch.style.boxShadow="0 2px 2px 0 #ccc";
        fixedSearch.className="i-lsc-wrapper i-lsc-ie678";
    }else{
        fixedSearch.style.position="relative";
        fixedSearch.style.boxShadow="none";
        fixedSearch.style.zIndex="";//IE7下有个bug，搜索联想框会被遮住
        fixedSearch.className="i-lsc-wrapper";
    }
}

//侧边栏购物车
var toolbarCart=document.getElementById("i-toolbar-cart");
toolbarCart.onclick=function(){
    var sidebar=document.getElementById("i-sidebar-wrapper");
    var isActive=sidebar.getAttribute("data-active");
    if(isActive=="true"){
        var right=0;
        var offset=270;
        var timer=setInterval(function(){
            offset*=0.9;
            console.log(offset)
            right=right-offset;
            sidebar.style.right=right+"px";
            if(offset<1){
                sidebar.style.right="-270px";
                clearInterval(timer);
            }
        },1);
        sidebar.setAttribute("data-active","false");
    }else{
        var right=-270;
        var timer=setInterval(function(){
            right*=0.9;
            sidebar.style.right=right+"px";
            if(right>-1){
                sidebar.style.right=0;
                clearInterval(timer);
            }
        },1);
        sidebar.setAttribute("data-active","true");
    }
}

//定位
var locationList=document.getElementById("i-location-list").getElementsByTagName("li");
for(var i=0;i<locationList.length;i++){
    locationList[i].onclick=function(){
        for(var j=0;j<locationList.length;j++){
            locationList[j].childNodes[0].className="i-location-link";
        }
        this.childNodes[0].className+=" i-location-link-active";
        document.getElementById("i-hnl-link-text").innerHTML=this.childNodes[0].innerHTML;
        //document.getElementById("i-location").style.display="none";
    }
}