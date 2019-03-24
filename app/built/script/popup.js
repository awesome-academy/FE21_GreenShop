$(document).ready(function() {
    $('#wrap-popup').css({
        top : '100px'
    })
    $('.delete').on('click',function() {
        $('#wrap-popup').css({
            display : 'none'
        })  
    })
        // $('body:not("#wrap-popup")').on('click',function() {
        //     $('#wrap-popup').css({
        //         display : 'none'
        //     })  
        // })
})