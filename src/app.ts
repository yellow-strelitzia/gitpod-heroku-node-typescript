import express from 'express'

const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// 3000番ポートでAPIサーバ起動
app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })