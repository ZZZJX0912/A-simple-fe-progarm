var ul = document.getElementById("inner_ul");
var ullis = ul.children;

//鼠标触碰禁止播放（事件委托）
const imgWrapper = document.querySelector('#inner_img');
imgWrapper.addEventListener('mouseenter', function(e){
    clearInterval(Timer);
});
imgWrapper.addEventListener('mouseleave', function(e){
    Timer = setInterval(autoplay, 5000)
});

//使页面从第2张开始
var left = -1240;
ul.style.left = left + "px";

var Timer = setInterval(autoplay, 5000)
var key = 0;  //控制图片张数


function autoplay(){      //自动播放
    if(left % 1240 == 0){
        key++;
    }
    //边界判断
    if(key > ullis.length - 1){
        key = 1;
        left = leader = -key * ullis[0].offsetWidth;
    }
    else if(key < 0){
        key = 3;
        left = leader = -key * ullis[0].offsetWidth;
    }
    animate(ul , -key * ullis[0].offsetWidth);
}

var leader = -1240;
function animate(obj, target){    //缓动动画
    clearInterval(obj.Timer);
    obj.Timer = setInterval(function(){
        leader = leader + (target - leader) / 10;
        obj.style.left = leader + "px"
    },30);
}
//点击事件
var left_buttom = document.getElementById("frontFlip_left");
var right_buttom = document.getElementById("frontFlip_right");
left_buttom.onclick = function(){
    clearInterval(ul.Timer);
    key -= 2;        //因为调用auto后key还是会++，所以得-2
    autoplay();
}
right_buttom.onclick = function(){
    clearInterval(ul.Timer);
    autoplay();
}



// 盒子触碰显示事件
var box = document.querySelectorAll(".link_box")
var imgs = document.querySelectorAll(".menuContent_pic img" )

for(var i = 0; i < box.length ; i ++){
    (function(i){
    box[i].onmousemove = function() {
        imgs[i].style.display = "block";
        }
    box[i].onmouseout = function() {
        imgs[i].style.display = "none";
        }    
    })(i)
}


