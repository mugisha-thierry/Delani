$(document).ready(function () {
    $('.work1').hover(function () {
        $('.overlay1').toggle();
    })

    $('.work2').hover(function () {
        $('.overlay2').toggle();
    })
    $('.work3').hover(function () {
        $('.overlay3').toggle();
    })
    $('.work4').hover(function () {
        $('.overlay4').toggle();
    })
    $('.work5').hover(function () {
        $('.overlay5').toggle();
    })
    $('.work6').hover(function () {
        $('.overlay6').toggle();
    })
    $('.work7').hover(function () {
        $('.overlay7').toggle();
    })
    $('.work8').hover(function () {
        $('.overlay8').toggle();
    })
    $('.design').click(function () {
        $('.design-text').show()
        $('.design').hide()

    })
    $('.design-text').click(function () {
        $('.design').show()
        $('.design-text').hide()
    });

    $('.development').click(function () {
        $('.development-text').show()
        $('.development').hide()

    })
    $('.development-text').click(function () {
        $('.development').show()
        $('.development-text').hide()
    });

    $('.product').click(function () {
        $('.product-text').show()
        $('.product').hide()

    })
    $('.product-text').click(function () {
        $('.product').show()
        $('.product-text').hide()
    });
})

function calc() {
    alert("we have received your message. Thank you fro reaching out to us.")
}
