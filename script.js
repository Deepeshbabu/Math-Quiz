function addUser() 
{
    p1 = document.getElementById("player1_name_input").value ;
    p2 = document.getElementById("player2_name_input").value ;

    localStorage.setItem("Player_1_name", p1) ;
    localStorage.setItem("Player_2_name", p2) ;

    window.location ="game.html" ;
}