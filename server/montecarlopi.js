var monteCarloPiParallel = function(n) { 

  var obj = {};

  obj.data = [];
  while(n-- > 0){
    obj.data[n]=1;
  }

  obj.func = function RunSimulation () {
    console.log("Running Simulation");
    var n = 1000;
    var inside = 0;
    while (n--) {
      var x = Math.random();
      var y = Math.random();
      if (x*x + y*y <= 1) {
        inside++;
      }
    }
    return inside;
  };

  var inside = 0;
  var total = 0;
  obj.PI = 0;
  obj.callback = function(results){
    inside += result;
    total += 1000;
    obj.PI = 4*inside/total;
  };
  return obj;
};

module.exports = monteCarloPiParallel;


