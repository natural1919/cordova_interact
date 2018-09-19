var ready = function(){
  var btn = document.getElementById('btn')
  var resp = document.getElementById('resp')

  var service = document.getElementById('service').value
  var action = document.getElementById('action').value
  var argument = document.getElementById('argument').value

  var send_func = function(str, call_back){
    var data = { first: 1, second: "2" };
    if(str !== ""){
      data = str;
    }
    cordova.exec(call_back, function(err){
      alert(err);
    }, service, action, [data]) 
  }

  btn.onclick = function(){
    send_func(argument, function(winParam){
      try{
        resp.innerHTML = parse_str(winParam)
      }catch(e){
        alert(e); 
      }
    })
  }

}
var parse_str = function(arg){
  return JSON.stringify(arg)
}

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

        ready()
        console.log('Received Event: ' + id);
    }
};

app.initialize();

