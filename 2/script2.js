$(document).ready(function(){
    $('.block').click(
        function(){
            $(this).animate({marginLeft: '+=100px'}, 1000);
            return false;
        }
    )
});