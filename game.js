
p1 = localStorage.getItem("Player_1_name") ;
p2 = localStorage.getItem("Player_2_name") ;

p1score = 0 ;
p2score = 0 ;

document.getElementById("player1_name").innerHTML = p1 + " : " ;
document.getElementById("player2_name").innerHTML = p2 + " : " ;

document.getElementById("p1socre").innerHTML = p1score ;
document.getElementById("p2socre").innerHTML = p2score ;

document.getElementById("playerquestion").innerHTML = "Question - " + p1 ;
document.getElementById("playeranswer").innerHTML = "Answer - " + p2 ;
``

function send() 
{
    n1 = document.getElementById("number1input").value ;
    n2 = document.getElementById("number2input").value ;

    actual_answer = parseInt(n1) * parseInt(n2) ;

    question_word = "<h4 id ='word_display'> Q. " + n1 + " X " + n2 + "</h4>" ;
    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>" ;
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>" ;
    row = question_word + input_box + check_button ;

    document.getElementById("output").innerHTML = row ;

    document.getElementById("number1input").value = 0 ;
    document.getElementById("number2input").value = 0 ;
}