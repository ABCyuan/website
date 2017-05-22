$(document).ready(function () {
    /*第一个完整轮播图*/
    var i=0;
    var clone=$(".banner .imgList li").first().clone();
    $(".banner .imgList").append(clone);
    var numlen=$(".banner .imgList li").length;
    /*左按钮*/
    $(".btn_l").click(function () {
        i++;
        if(i==numlen){$(".banner").css({left:0});i=1};
        $(".banner").stop().animate({left:-1362*i},1000);
        if(i==numlen-1){
         $(".fix .num li").eq(0).addClass("active").siblings().removeClass("active")
        }
        $(".fix .num li").eq(i).addClass("active").siblings().removeClass("active")
    });
    /*右按钮*/
    $(".btn_r").click(function () {
        i--;
        if(i==-1){$(".banner").css({left:-1362*(numlen-1)});i=numlen-2};
        $(".banner").stop().animate({left:-1362*i},1000);
        $(".fix .num li").eq(i).addClass("active").siblings().removeClass("active")
    });
    /*数字滑动*/
    $(".num li").hover(function () {
        var index=$(this).index();
        i=index;
        $(".banner").stop().animate({left:-1362*index},1000);
        $(this).addClass("active").siblings().removeClass("active");
    });
    /*自动轮播*/
    var set=setInterval(function () {
        i++;
        if(i==numlen){$(".banner").css({left:0});i=1};
        $(".banner").stop().animate({left:-1365*i},1000);
        if(i==numlen-1){
        $(".fix .num li").eq(0).addClass("active").siblings().removeClass("active");
        }
        $(".fix .num li").eq(i).addClass("active").siblings().removeClass("active");
    },5000);
    /*暂停动画*/
    $(".fix").hover(function () {
        clearInterval(set);
    },function () {
        set=setInterval(function () {
            i++;
            if(i==numlen){$(".banner").css({left:0});i=1};
            $(".banner").stop().animate({left:-1362*i},1000);
            if(i==numlen-1){
                $(".fix .num li").eq(0).addClass("active").siblings().removeClass("active")
            }
            $(".fix .num li").eq(i).addClass("active").siblings().removeClass("active")
        },5000)
    });
    /*导航条事件*/
    $(".nav_s").hover(function () {
        $(this).find("div").stop().slideDown(500)
    }, (function () {
        $(this).find("div").stop().slideUp(500)
    }));
    /*新闻区域点击事件*/
    $(".news_t").click(function () {
        var news_f = $(".news_f");
        news_f.animate({width: 140}, 300);
        var news_lr=$(".news_lr");
        var news_t=$(".news_t");
        news_t.animate({width:150},300);
        news_lr.animate({top:0},300);
    });
    $(".news_f").click(function () {
        var news_lr = $(".news_lr");
        var news_f = $(".news_f");
        var news_t=$(".news_t");
        news_t.animate({width:140},300);
        news_f.animate({width: 150}, 300);
        news_lr.animate({top: -338}, 300);
    });
    /*第二个轮播图统一定义一个运动函数*/
    var k=0;
    imLigst2=$(".banner2 .imgList2")
    numlen2=$(".banner2 .imgList2 li").length;
    /*定义运动函数*/
    function move2() {
        if(k==numlen2-3){
            imLigst2.css({left:0})
            k=1}
        if(k==-1){
            imLigst2.css({left:-(numlen2-4)*274})
            k=numlen2-5}
        imLigst2.stop().animate({left:-k*274},800)
    };
    $(".scenery .scenery_l").click(function(){k++;move2()});
    $(".scenery .scenery_r").click(function(){k--;move2()});
    var set2=setInterval(function () {
        k++;move2()
    },4000)
    $(".banner2").hover(function () {
        clearInterval(set2)
    },function () {
        set2=setInterval(function () {
            k++;move2()
        },4000)
    })
});
