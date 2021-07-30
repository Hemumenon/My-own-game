class Game{

    constructor(){
     
    
    }
    
    getState(){

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){

            gameState = data.val();
        });

    }

    update(state){

        database.ref("/").update({

            gameState : state
        });

    }

    start(){

        if(gameState === 0){

            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
        
        player1 = createSprite(100,200,100,100);
        player2 = createSprite(700,200,100,100);

        players = [player1,player2];
    }

    play(){

        form.hide();
        Player.getPlayerInfo();


        if(allPlayers !== undefined){
            
            background("lightblue");

            var index = 0;

            var x = 200;
            var y;

            for(var plr in allPlayers){

                index = index + 1;

                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                
                console.log(x + "----" + y);
                players[index-1].x = x;
                players[index-1].y = y;
                
                if(index === player.index){

                    players[index - 1].shapeColor = "red";                    

                    
                }

            }

        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=20
            player.update();
          }
    }
}
