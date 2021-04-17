$(document).ready(function(){  

$('button1 ').on('click', function(){

    $('table #cnopca1').remove();
});

$('button2 ').on('click', function(){

    $('table #cnopca2').remove();
});

$('form').submit(function(){
   
   var newhtml=('<tr><td width="150px" bgcolor="grey">QUEST</td><td  type="button" width="25px" bgcolor="green" align="center">X</td></tr>');
    $('table').append(newhtml);
});

});