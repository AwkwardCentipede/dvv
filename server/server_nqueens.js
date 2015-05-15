var dvv = require('./dvv.js');
nqueens = require('./nqueens.js')(15);

//Also each set of arguments must be in its own array

dvv.config({
  staticPath: '/../client',
  timeout: 30000,
  data: nqueens.data,
  partitionLength: 0,
  func: nqueens.func,
  callback: nqueens.callback,
  clock: true
});


dvv.start();