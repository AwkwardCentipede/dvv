var dvv = require('./dvv.js');
monteCarloPi = require('./montecarlopi.js')(15);

//Also each set of arguments must be in its own array

dvv.config({
  staticPath: '/../client',
  timeout: 30000,
  data: nqueens.data,
  partitionLength: 0,
  func: monteCarloPi.func,
  callback: nqueens.callback,
  clock: true
});


dvv.start();