var winners = new Array();




function redirect() {
  location.replace("http://localhost:3000/index2.html")
}

//GET
function getWinHistory() {
  //return axios.get('http://localhost:8080/players/all')
  axios.get('http://localhost:8080/players/all')
  .then((response) => {
    console.log(response.data)
    createTableOfWinners(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

//GET
function getGamesWhereThisPlayerWon(a) {
  axios.get('http://localhost:8080/players/playernumber/'+a)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error);
  });
}

//find a specific game
function getSpecificGame(a) {
  axios.get('http://localhost:8080/players/id/'+a)
  .then(response => {
      console.log(response.data)
  })
  .catch(error => {
    console.log(error);
  });
}

//POST
function update(a) {
    const Player = {
        playernumber: a,
    }
    axios.post('http://localhost:8080/players', Player)
    .then(res => console.log("Player " + Player.playernumber + " Added!!!"));
}

//DELETE
function deleteGame(id) {

    var txt;
    var r = confirm("Are you sure you want to delete this entry from the hall of fame?");
    if (r == true) {
        axios.delete('http://localhost:8080/players/playernumber/'+id, id)
            .then(response => {

                var table = document.getElementById("myTable")
                var rows = table.rows.length;
                var n = 0;
                for(var i = 0; i < rows ;i++ ){
                    //console.log(i);
                    //console.log(table.rows[i].cells[0].innerHTML);
                    //console.log(id);
                    if(id == table.rows[i].cells[0].innerHTML){
                        n = i;

                        break;
                    }
                }
                //console.log(id);
                //console.log(n);
                console.log("THE TRUTH HAS BEEN DESTROYED!");
                table.deleteRow(n);
                alert("Game record successfully deleted.");
                 })
            .catch(error => {
                console.log("FOILED?! HOW THIS BE?!?!?!");
                alert("The game record does not exist.");
        });
    }

}

function createTableOfWinners(winners) {

    this.winners = winners;

    var x = document.getElementById("myTable");

    var rows = winners.length;
    var header = x.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "id";
    cell = row.insertCell(1);
    cell.innerHTML = "playername";
    cell = row.insertCell(2);
    cell.innerHTML = "Delete Game";

    for(var r = 1; r <= rows; r++){
        row = header.insertRow(r);
        cell = row.insertCell(0);
        cell.innerHTML = winners[r-1].id;
        cell = row.insertCell(1);
        cell.innerHTML = winners[r-1].playernumber;
        cell = row.insertCell(2);
        var y = document.createElement('button');
        y.innerHTML = "Delete";
        //usare il let per creare una variabile fresca "rr" per ogni bottone
        let rr = r;
        y.onclick = () => {
             deleteGame(winners[rr-1].id);
        }
        cell.appendChild(y);
    }

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



var myGamePiece;
var myBackground;

var blue_pawns = new Array(10);
var pink_pawns = new Array(10);
var green_pawns = new Array(10);
var orange_pawns = new Array(10);
var red_pawns = new Array(10);
var yellow_pawns = new Array(10);
var no_pawns = new Array(61);


function startGame() {

    blue_pawns[0] = new component(18, 18, "blue_pawn.png", 380, 65, "image");

    blue_pawns[1] = new component(18, 18, "blue_pawn.png", 355, 100, "image");
    blue_pawns[2] = new component(18, 18, "blue_pawn.png", 395, 100, "image");

    blue_pawns[3] = new component(18, 18, "blue_pawn.png", 380, 145, "image");
    blue_pawns[4] = new component(18, 18, "blue_pawn.png", 335, 145, "image");
    blue_pawns[5] = new component(18, 18, "blue_pawn.png", 420, 145, "image");

    blue_pawns[6] = new component(18, 18, "blue_pawn.png", 315, 180, "image");
    blue_pawns[7] = new component(18, 18, "blue_pawn.png", 355, 180, "image");
    blue_pawns[8] = new component(18, 18, "blue_pawn.png", 395, 180, "image");
    blue_pawns[9] = new component(18, 18, "blue_pawn.png", 440, 180, "image");


    pink_pawns[0] = new component(18, 18, "pink_pawn.png", 640, 225, "image");

    pink_pawns[1] = new component(18, 18, "pink_pawn.png", 600, 225, "image");
    pink_pawns[2] = new component(18, 18, "pink_pawn.png", 620, 265, "image");

    pink_pawns[3] = new component(18, 18, "pink_pawn.png", 560, 225, "image");
    pink_pawns[4] = new component(18, 18, "pink_pawn.png", 580, 265, "image");
    pink_pawns[5] = new component(18, 18, "pink_pawn.png", 595, 305, "image");

    pink_pawns[6] = new component(18, 18, "pink_pawn.png", 510, 225, "image");
    pink_pawns[7] = new component(18, 18, "pink_pawn.png", 530, 265, "image");
    pink_pawns[8] = new component(18, 18, "pink_pawn.png", 555, 305, "image");
    pink_pawns[9] = new component(18, 18, "pink_pawn.png", 575, 340, "image");


    green_pawns[0] = new component(18, 18, "green_pawn.png", 640, 540, "image");

    green_pawns[1] = new component(18, 18, "green_pawn.png", 620, 495, "image");
    green_pawns[2] = new component(18, 18, "green_pawn.png", 600, 540, "image");

    green_pawns[3] = new component(18, 18, "green_pawn.png", 595, 460, "image");
    green_pawns[4] = new component(18, 18, "green_pawn.png", 580, 495, "image");
    green_pawns[5] = new component(18, 18, "green_pawn.png", 555, 540, "image");

    green_pawns[6] = new component(18, 18, "green_pawn.png", 580, 420, "image");
    green_pawns[7] = new component(18, 18, "green_pawn.png", 560, 460, "image");
    green_pawns[8] = new component(18, 18, "green_pawn.png", 535, 495, "image");
    green_pawns[9] = new component(18, 18, "green_pawn.png", 510, 540, "image");


    orange_pawns[0] = new component(18, 18, "orange_pawn.png", 370, 690, "image");

    orange_pawns[1] = new component(18, 18, "orange_pawn.png", 355, 650, "image");
    orange_pawns[2] = new component(18, 18, "orange_pawn.png", 395, 650, "image");

    orange_pawns[3] = new component(18, 18, "orange_pawn.png", 375, 610, "image");
    orange_pawns[4] = new component(18, 18, "orange_pawn.png", 330, 610, "image");
    orange_pawns[5] = new component(18, 18, "orange_pawn.png", 415, 610, "image");

    orange_pawns[6] = new component(18, 18, "orange_pawn.png", 310, 575, "image");
    orange_pawns[7] = new component(18, 18, "orange_pawn.png", 350, 575, "image");
    orange_pawns[8] = new component(18, 18, "orange_pawn.png", 390, 575, "image");
    orange_pawns[9] = new component(18, 18, "orange_pawn.png", 435, 575, "image");


    red_pawns[0] = new component(18, 18, "red_pawn.png", 105, 530, "image");

    red_pawns[1] = new component(18, 18, "red_pawn.png", 125, 490, "image");
    red_pawns[2] = new component(18, 18, "red_pawn.png", 150, 530, "image");

    red_pawns[3] = new component(18, 18, "red_pawn.png", 150, 455, "image");
    red_pawns[4] = new component(18, 18, "red_pawn.png", 175, 490, "image");
    red_pawns[5] = new component(18, 18, "red_pawn.png", 190, 530, "image");

    red_pawns[6] = new component(18, 18, "red_pawn.png", 175, 415, "image");
    red_pawns[7] = new component(18, 18, "red_pawn.png", 190, 455, "image");
    red_pawns[8] = new component(18, 18, "red_pawn.png", 215, 490, "image");
    red_pawns[9] = new component(18, 18, "red_pawn.png", 235, 530, "image");


    yellow_pawns[0] = new component(18, 18, "yellow_pawn.png", 110, 215, "image");

    yellow_pawns[1] = new component(18, 18, "yellow_pawn.png", 130, 260, "image");
    yellow_pawns[2] = new component(18, 18, "yellow_pawn.png", 150, 215, "image");

    yellow_pawns[3] = new component(18, 18, "yellow_pawn.png", 150, 300, "image");
    yellow_pawns[4] = new component(18, 18, "yellow_pawn.png", 170, 260, "image");
    yellow_pawns[5] = new component(18, 18, "yellow_pawn.png", 195, 215, "image");

    yellow_pawns[6] = new component(18, 18, "yellow_pawn.png", 170, 340, "image");
    yellow_pawns[7] = new component(18, 18, "yellow_pawn.png", 195, 300, "image");
    yellow_pawns[8] = new component(18, 18, "yellow_pawn.png", 215, 260, "image");
    yellow_pawns[9] = new component(18, 18, "yellow_pawn.png", 240, 215, "image");


    no_pawns[0] = new component(18, 18, "no_pawn.png", 290, 215, "image");
    no_pawns[1] = new component(18, 18, "no_pawn.png", 330, 215, "image");
    no_pawns[2] = new component(18, 18, "no_pawn.png", 375, 215, "image");
    no_pawns[3] = new component(18, 18, "no_pawn.png", 420, 215, "image");
    no_pawns[4] = new component(18, 18, "no_pawn.png", 465, 215, "image");

    no_pawns[5] = new component(18, 18, "no_pawn.png", 260, 260, "image");
    no_pawns[6] = new component(18, 18, "no_pawn.png", 310, 260, "image");
    no_pawns[7] = new component(18, 18, "no_pawn.png", 350, 260, "image");
    no_pawns[8] = new component(18, 18, "no_pawn.png", 400, 260, "image");
    no_pawns[9] = new component(18, 18, "no_pawn.png", 445, 260, "image");
    no_pawns[10] = new component(18, 18, "no_pawn.png", 490, 260, "image");

    no_pawns[11] = new component(18, 18, "no_pawn.png", 240, 300, "image");
    no_pawns[12] = new component(18, 18, "no_pawn.png", 285, 300, "image");
    no_pawns[13] = new component(18, 18, "no_pawn.png", 330, 300, "image");
    no_pawns[14] = new component(18, 18, "no_pawn.png", 375, 300, "image");
    no_pawns[15] = new component(18, 18, "no_pawn.png", 420, 300, "image");
    no_pawns[16] = new component(18, 18, "no_pawn.png", 465, 300, "image");
    no_pawns[17] = new component(18, 18, "no_pawn.png", 510, 300, "image");

    no_pawns[18] = new component(18, 18, "no_pawn.png", 215, 340, "image");
    no_pawns[19] = new component(18, 18, "no_pawn.png", 255, 340, "image");
    no_pawns[20] = new component(18, 18, "no_pawn.png", 305, 340, "image");
    no_pawns[21] = new component(18, 18, "no_pawn.png", 350, 340, "image");
    no_pawns[22] = new component(18, 18, "no_pawn.png", 395, 340, "image");
    no_pawns[23] = new component(18, 18, "no_pawn.png", 440, 340, "image");
    no_pawns[24] = new component(18, 18, "no_pawn.png", 485, 340, "image");
    no_pawns[25] = new component(18, 18, "no_pawn.png", 530, 340, "image");

    no_pawns[26] = new component(18, 18, "no_pawn.png", 190, 375, "image");
    no_pawns[27] = new component(18, 18, "no_pawn.png", 230, 375, "image");
    no_pawns[28] = new component(18, 18, "no_pawn.png", 280, 375, "image");
    no_pawns[29] = new component(18, 18, "no_pawn.png", 330, 375, "image");
    no_pawns[30] = new component(18, 18, "no_pawn.png", 370, 375, "image");
    no_pawns[31] = new component(18, 18, "no_pawn.png", 420, 375, "image");
    no_pawns[32] = new component(18, 18, "no_pawn.png", 460, 375, "image");
    no_pawns[33] = new component(18, 18, "no_pawn.png", 510, 375, "image");
    no_pawns[34] = new component(18, 18, "no_pawn.png", 555, 375, "image");

    no_pawns[35] = new component(18, 18, "no_pawn.png", 210, 415, "image");
    no_pawns[36] = new component(18, 18, "no_pawn.png", 260, 415, "image");
    no_pawns[37] = new component(18, 18, "no_pawn.png", 305, 415, "image");
    no_pawns[38] = new component(18, 18, "no_pawn.png", 350, 415, "image");
    no_pawns[39] = new component(18, 18, "no_pawn.png", 395, 415, "image");
    no_pawns[40] = new component(18, 18, "no_pawn.png", 445, 415, "image");
    no_pawns[41] = new component(18, 18, "no_pawn.png", 490, 415, "image");
    no_pawns[42] = new component(18, 18, "no_pawn.png", 535, 415, "image");

    no_pawns[43] = new component(18, 18, "no_pawn.png", 230, 455, "image");
    no_pawns[44] = new component(18, 18, "no_pawn.png", 280, 455, "image");
    no_pawns[45] = new component(18, 18, "no_pawn.png", 325, 455, "image");
    no_pawns[46] = new component(18, 18, "no_pawn.png", 370, 455, "image");
    no_pawns[47] = new component(18, 18, "no_pawn.png", 420, 455, "image");
    no_pawns[48] = new component(18, 18, "no_pawn.png", 465, 455, "image");
    no_pawns[49] = new component(18, 18, "no_pawn.png", 510, 455, "image");

    no_pawns[50] = new component(18, 18, "no_pawn.png", 260, 495, "image");
    no_pawns[51] = new component(18, 18, "no_pawn.png", 300, 495, "image");
    no_pawns[52] = new component(18, 18, "no_pawn.png", 350, 495, "image");
    no_pawns[53] = new component(18, 18, "no_pawn.png", 395, 495, "image");
    no_pawns[54] = new component(18, 18, "no_pawn.png", 445, 495, "image");
    no_pawns[55] = new component(18, 18, "no_pawn.png", 490, 495, "image");

    no_pawns[56] = new component(18, 18, "no_pawn.png", 280, 530, "image");
    no_pawns[57] = new component(18, 18, "no_pawn.png", 325, 530, "image");
    no_pawns[58] = new component(18, 18, "no_pawn.png", 375, 530, "image");
    no_pawns[59] = new component(18, 18, "no_pawn.png", 420, 530, "image");
    no_pawns[60] = new component(18, 18, "no_pawn.png", 465, 530, "image");


    myBackground = new component(762, 762, "chinese_checkers.png", 0, 0, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 762;
        this.canvas.height = 762;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    draggable: true
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myBackground.newPos();
    myBackground.update();

    for (var i = 0; i < 10; i++) {
        blue_pawns[i].newPos();
        blue_pawns[i].update();
        pink_pawns[i].newPos();
        pink_pawns[i].update();
        green_pawns[i].newPos();
        green_pawns[i].update();
        orange_pawns[i].newPos();
        orange_pawns[i].update();
        red_pawns[i].newPos();
        red_pawns[i].update();
        yellow_pawns[i].newPos();
        yellow_pawns[i].update();
    }

    for (var i = 0; i < 61; i++) {
        no_pawns[i].newPos();
        no_pawns[i].update();
    }
}




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





class pawn_space{
    constructor(id, colour, x, y){
        this.id = id;
        this.colour = colour;
        this.x = x;
        this.y = y;
    }
}

var game_board = new Array(17);

function fill_the_board(){
    for (var i = 0; i < 17; i++) {
        game_board[i] = Array(13).fill(null);
    }

    game_board[0] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[1] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[2] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[3] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[4] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[5] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[6] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[7] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[8] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[9] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[10] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[11] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[12] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[13] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[14] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[15] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]
    game_board[16] = [
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(1, "blue", 380, 65),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0),
        new pawn_space(0, "", 0, 0)
    ]

}


fill_the_board(game_board);


window.onload = function () {

    const pieceContainerElement = document.getElementById('chinese_checkers');
    const cellElement = document.createElement("div");

    var DOM_img = document.createElement("img");
    DOM_img.src = "blue_pawn.png";
    pieceContainerElement.appendChild(DOM_img);
    pieceContainerElement.innerHTML = '<img src="chinese_checkers.png" />';


}



