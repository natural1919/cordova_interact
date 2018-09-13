var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

window.onload = function(){
  console.log("Version 0.0.1 ")
  var data = document.getElementById('data')
  var btn = document.getElementById('btn')
  var resp = document.getElementById('resp')

  var service = document.getElementById('service').value
  var action = document.getElementById('action').value
  var argument = document.getElementById('argument').value

  var send_data = ""
  var send_func = function(str, call_back){
    cordova.exec(call_back, function(err){
      console.log(err) 
    }, service, action, argument) 
  }

  btn.onclick = function(){
    try{
      send_data = JSON.parse(data.value) 
    }catch(e){
      console.log(e)  
    }
    send_func(send_data, function(winParam){
      resp.innerHTML = JSON.parse(winParam) 
    })
  }

}
