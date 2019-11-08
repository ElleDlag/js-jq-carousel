$(function(){
var imgEl = $('.images img');
var navEl = $('.nav i.fas');
//click on dot
    function dotsBehavior(){
        $(this).addClass('active');
        $(navEl).not($(this)).removeClass('active');
        var num = parseInt($(this).index());
        imgEl.eq(num).addClass('active');
        $(imgEl).not($(imgEl).eq(num)).removeClass('active');
    }
////click on <<prev || next>>
    function navBehavior(){

        //common
        var num = parseInt($(".images img.active").index());
        var last = parseInt($(".images img").length);
        imgEl.eq(num).removeClass('active')
            //if click on next
            //if this is minor items lenght go next
            //else if this is last item return to first
            if($(this).hasClass('next') && num < 3){
                imgEl.eq(num+1).addClass('active');
                navEl.eq(num+1).addClass('active');
                $(navEl).not($(navEl).eq(num+1)).removeClass('active');
                console.log(num)
            } else if($(this).hasClass('next') && num >= 3){
                imgEl.eq(0).addClass('active');
                navEl.eq(0).addClass('active');
                $(navEl).last().removeClass('active');
            }

            //if click on prev
            //if return unitil first, auto restart from last when num is equal -1
            //else if this is last itemreturn to first
            if($(this).hasClass('prev')){
                imgEl.eq(num-1).addClass('active');
                navEl.eq(num-1).addClass('active');
                $(navEl).not($(navEl).eq(num-1)).removeClass('active');
            }
    }
$('.nav .fas').click(dotsBehavior);
$('.prev').click(navBehavior);
$('.next').click(navBehavior);
})
