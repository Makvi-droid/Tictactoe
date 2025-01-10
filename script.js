const Player = function(name, marker){

    return{
        name,
        marker,
        introduce(){
            console.log(`Hi! my name is ${name} and my mark is ${marker}`);
        }
    };

};

const player1 = Player("Just", "X");
const player2 = Player("AI", "O");

player1.introduce();
player2.introduce();