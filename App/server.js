const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('Home')
})

app.listen(3000, ()=> {
    console.log('listening')
})