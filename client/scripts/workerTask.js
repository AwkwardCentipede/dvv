//Import our math script
importScripts("https://cdnjs.cloudflare.com/ajax/libs/mathjs/1.6.0/math.min.js");

//Listen to incoming data, evaluate the data and return it
self.addEventListener('message', function(e) {
  console.log('e',e);
  // var startTime = new Date().getTime();
  var element = e.data.payload;
  var result = eval(e.data.fn);
  // console.log('results',result)
  self.postMessage(result);
}, false);