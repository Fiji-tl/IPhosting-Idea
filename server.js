const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/ip',(req,res)=>{
const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
res.json({ip});
});

app.listen(3000,()=>console.log('Server running'));