var canvas= new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_x=10;
player_y=10;
var player_objects=" "
var block_object=" "

function player_update(){
    fabric.Imager.fromURL("player.png", function(Img){
        player_objects=Img;
        player_objects.scaleToWidth(100);
        player_objects.scaleToHeight(150);
        player_objects.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_objects);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown", kd);

function kd(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed==80){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
        console.log("shift and p together are pressed")
    }
    if(e.shiftKey==true && keyPressed==77){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
        console.log("shift and m are pressed together")
    }
    if(keyPressed==70){
        new_image("ironman_face.png");
        console.log("f")
    }
    if(keyPressed==66){
        new_image("hulkd_body.png");
        console.log("b")
    }
    if(keyPressed==76){
        new_image("spiderman_legs.png");
        console.log("l")
    }
    if(keyPressed==82){
        new_image("thor_right_hand.png");
        console.log("r")
    }
    if(keyPressed==72){
        new_image("thor_left_hand.png");
        console.log("h")
    }
    function up(){
        if(player_y>=0){
            player_y=player_y-block_height;
            canvas.remove(player_object);
            player_update();
        }
    }
    function down(){
        if(player_y<=450){
            player_y=player_y+block_height;
            canvas.remove(player_object);
            player_update();
        }
    }
    function left(){
        if(player_x>=0){
            player_x=player_x-block_width;
            canvas.remove(player_object);
            player_update();
        }
    }
    function right(){
        if(player_x<=650){
            player_x=player_x+block_width;
            canvas.remove(player_object);
            player_update();
        }
    }
}
