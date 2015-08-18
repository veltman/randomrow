var parse = require("csv-parse")({ columns: true }),
    shuffle = require("knuth-shuffle").knuthShuffle;

module.exports = function(stream) {

  var rows = [];

  stream.pipe(parse)
        .on("data",function(data){
          rows.push(data);
        })
        .on("end",function(){
          shuffle(rows);
          console.log(JSON.stringify(rows[0],null,"  "));
        });

}