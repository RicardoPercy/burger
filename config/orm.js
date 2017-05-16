var connection = require("./connection");



connection.query("SELECT * FROM burgers", function (req, res){


console.log(res)

});


