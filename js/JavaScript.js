// 背景图片随机切换 ———Start
var background=[
    // "https://b.zhutix.com/bizhi/minimal_landscapes/1.jpg",
    // "https://b.zhutix.com/bizhi/minimal_landscapes/3.jpg",
    // "https://b.zhutix.com/bizhi/minimal_landscapes/6.jpg",
    // "https://b.zhutix.com/bizhi/Janguru/4.jpg",
    "./Img/背景图片/01.jpg",
    "./Img/背景图片/02.jpg",
    "./Img/背景图片/03.jpg",
    "./Img/背景图片/04.jpg",
    "./Img/背景图片/05.jpg",
    "./Img/背景图片/06.jpg",
    ]


//随机数获取壁纸路径
var i = background.length
var random = Math.floor(Math.random()*i)

// alert(background[random])
ChangeWallpaper(background[random])


//修改壁纸的方法
function ChangeWallpaper(Locations){
    $('.head').css({
        "background-image":"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("+Locations+")"
    })
}

$('#bg-pre').click(function(){
    i = i-1
    if(i<0){
        i = background.length-1
    }
    ChangeWallpaper(background[i])
})

$('#bg-next').click(function(){
    i = i+1
    if(i>=background.length){
        i = 0
    }
    ChangeWallpaper(background[i])
})
// 背景图片随机切换 ———End

var Windows_Hight = document.documentElement.clientHeight

$(".chevron-down").click(function(){
    $('html').animate({ scrollTop: Windows_Hight }, 1000)
})

var i = 0

window.addEventListener('scroll', (e) => {
    var h = document.documentElement.scrollTop

    console.log(h)

    var start = 1000  
    var num = $('.document').length
    

    // alert(num)

    if(h>=(850)){
        $('.documents').addClass('documents_Show')
    }else{
        $('.documents').removeClass('documents_Show')
    }

    if(h>=(800+i*380)){
        $('.document:eq('+i+')').addClass('document_show')
        i++
    }else{
        $('.document:eq('+i+')').removeClass('document_show')
        i--
    }

    if(h>=260){
        $('.Welcome').addClass('Welcome_Show')
    }else{
        $('.Welcome').removeClass('Welcome_Show')
    }

    if(h>=280){
        $('.homepage').addClass('homepage_Show')
    }else{
        $('.homepage').removeClass('homepage_Show')
    }

})