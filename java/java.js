$(document).ready(function(){
    $('.work1').hover(function(){
        $('.overlay1').toggle();
    })

    $('.work2').hover(function(){
        $('.overlay2').toggle();
    })
})


$(document).ready(function(){
    $(".description").click(function(){
        $(".descript").show()
        $(".description").hide()
    })
    $(".descript").click(function(){
        $(".description").show()
        $(".descript").hide() 
    })
})

