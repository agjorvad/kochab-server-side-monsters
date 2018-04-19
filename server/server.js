const express = require('express');

const app = express();
const PORT = 5000;
const monsterArray = ['Big Foot', 'Loch Ness Monster', 'Mike', 'Sully'];
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

app.use(express.static('server/public')); //express is an object with a method in this case

app.get('/monsters', function (req, res) {
    res.send(monsterArray);
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});