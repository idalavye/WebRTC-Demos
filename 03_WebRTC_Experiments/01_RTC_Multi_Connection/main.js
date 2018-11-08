var connection = new RTCMultiConnection();

connection.socketURL = 'http://localhost:9001/';

connection.session = {
    audio:true,
    video:true
}

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};
var roomId = document.getElementById('txt-roomid');
roomId.value = connection.token();


document.getElementById('btn-open-or-join-room').onclick = function(){
    this.disabled = true;
    connection.openOrJoin(roomId.value || 'predefined-roomid');
}

// connection.onstream = function(event){
//     var video = event.mediaElement;

//     if(event.type = 'local'){
//         localVideoContainer.appendChild(video);
//     }

//     if(event.type = 'remote'){
//         remoteVideoContainer.appendChild(video);
//     }
// }