function resize(){
    var columns = 4;
    var pageWidth = $('#codeContainer').width() - 10;
    
    if ($('a#htmlButton').hasClass("selected") == false){
        $('#htmlCodeContainer').hide();
        columns -= 1;
    }else{
        $('#htmlCodeContainer').show();
    }
    
    if ($('a#cssButton').hasClass("selected") == false){
        $('#cssCodeContainer').hide();
        columns -= 1;
    }else{
        $('#cssCodeContainer').show();
    }
    
    if ($('a#jsButton').hasClass("selected") == false){
        $('#jsCodeContainer').hide();
        columns -= 1;
    }else{
        $('#jsCodeContainer').show();
    }
    
    if ($('a#outputButton').hasClass("selected") == false){
        $('#outputContainer').hide();
        columns -= 1;
    }else{
        $('#outputContainer').show();
    }
         
    $('#htmlCodeContainer').width(pageWidth / columns);
    $('#cssCodeContainer').width(pageWidth / columns);
    $('#jsCodeContainer').width(pageWidth / columns);
    $('#outputContainer').width(pageWidth / columns);
    
}

function buttonToggle(){

    $('a#htmlButton').click(function(){
        $(this).toggleClass("selected");
        resize();
    });
    $('a#cssButton').click(function(){
        $(this).toggleClass("selected");
        resize();
    });
    $('a#jsButton').click(function(){
        $(this).toggleClass("selected");
        resize();
    });
    $('a#outputButton').click(function(){
        $(this).toggleClass("selected");
        resize();
    });   
}

function updateOutput(){
    $("#outputContainer").contents().find("html").html("<html><head><style type='text/css'>" + $('#cssCode').val() + "</style></head><body>" + $('#htmlCode').val() + "</body></html>");
    
    document.getElementById("outputContainer").contentWindow.eval($('#jsCode').val());
    
}

$("textarea").on('change keyup paste', function(){
    
    updateOutput();
    
});
    
$(document).ready(function(){
    
    buttonToggle();   
    
    resize();  
    
    updateOutput();
});