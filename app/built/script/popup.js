 const popup = function() {
    $('#wrap-popup').css({
        top : '100px'
    })
    $('.delete').on('click',function() {
        $('#wrap-popup').css({
            display : 'none'
        })  
    })
 
 }      
 
    
    // cookie
    window.addEventListener('DOMContentLoaded',function() {
        
        if(localStorage.getItem('name') != 'thiennhat') {
            popup();
            localStorage.setItem('name','thiennhat');
        } else {
            return true;
        }

        
        
        
        
    })