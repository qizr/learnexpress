const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World from ailiyun! qzr_1986@163.com'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))