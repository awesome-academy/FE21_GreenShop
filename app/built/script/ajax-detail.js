$(document).ready(function() {
    $('section .section-new:first-child h4').click(function() {
        $('section').load('./pages/new-detail.html',function() {
            return true;
        })
    })
})