const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());   
app.use(express.json());

//接口测试
app.get('/api/user', async (req, res) => {
  try {
    const [rows] = await pool.query('select * from user')
    res.json({ code:200, data:rows })
  } catch(e) {
    res.status(500).json({code:500,msg:'数据库错误',err:e.message})
  }
})

app.listen(PORT,()=>{
  console.log(`服务启动：http://127.0.0.1:${PORT}`)
}
