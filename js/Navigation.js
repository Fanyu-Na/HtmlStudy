var Windows_Hight = document.documentElement.clientHeight

window.addEventListener('scroll', (e) => {
    // console.log(document.documentElement.scrollTop)

    var h = document.documentElement.scrollTop
    // console.log(document.documentElement.scrollTop)
    // let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    if(h>140){
        $('.menus').addClass('menus_hover')
        $('.items').addClass('items_hover')
    }else{
        $('.menus').removeClass('menus_hover')
        $('.items').removeClass('items_hover')
    }

    if(h>140){
        $('.goTop').addClass('showGoTop')
    }else if(h<20){
        $('.goTop').removeClass('showGoTop')
    }
})


$(".goTop").click(function(){
    if($('html').scrollTop()){
        $('html').animate({ scrollTop: 0 }, 1000)
        return false
    }
})