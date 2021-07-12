class Player {

 constructor(){

 }
 getCount(){

    var PlayerCountRef = database.ref('playerCount')
    PlayerCountRef.on("value",function(data){
    playerCount=data.val()
 })
 }

 update(count){

    database.ref('/').update({

        playerCount:count
    })
}

update(name){

    var playerIndex="player"+ playerCount
    database.ref(playerIndex).set({name:name})
}

}