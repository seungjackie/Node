// express 모듈을 가져온다
const express = require('express')
// 새은 앱을 만든다
const app = express()
// 5000 포
const port = 5500


//연결, 에러 방지 
const mongoose  = require('mongoose')
mongoose.connect('mongodb+srv://seungjae:tmdwoek2@seung.d2gpzxd.mongodb.net/?retryWrites=true&w=majority', {
    // 지원되지 않는다.
    // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MonggoDb Connected ......'))
  .catch(err => console.log('error'))
// 
app.get('/', (req, res) => {
  res.send('Hello World ! ~~~ 안녕하세요')
})

// listen 을 한다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})