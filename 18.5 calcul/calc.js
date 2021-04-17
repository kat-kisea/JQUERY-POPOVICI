$(function(){

    var calculator = $("#calculator");
    var functionButtons = "CBack*/-+=";

    var lines = [
        ["C", "Back", "()", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "+"],
        ["1", "2", "3", "-"],
        ["0", ".", "="]
    ];
    
    var imput = $("<div class='input'></div>");
    calculator .append(imput);

    var equal, times, plus, minus, back, clear, slash;

    for (var i = 0; i  < lines.length; i++) {
        var  lines = $("<div class='line'></div>");
        for (var j = 0; j < lines[i].length; j++){
            var btn = $("<div class='button b"+lines[i][j]+"'></div>");

            if (btn.text() == "+") plus = btn;
            if (btn.text() == "-") minus = btn;
            if (btn.text() == "*") times = btn;
            if (btn.text() == "/") slash = btn;
            if (btn.text() == "Back") back = btn;
            if (btn.text() == "=") equal = btn;
            if (btn.text() == "C") clear = btn;
             lines.append(btn);
        }
        calculator.append(line);
    }

    window.onkeydown = function (event) {
        var e = event;
        console.log(e.keyCode);
        switch(e.keyCode){
            case   
                back.trigger("click")
                break
            default
            $("#calculator .button.b" + (e.keyCode - 48)).trigger("click");
            break;
        }
    }

});
