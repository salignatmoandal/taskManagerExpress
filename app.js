const express = require('express')
const app = express()

const userRouter = require("./Routers/user")
const taskRouter = require("./Routers/task")
const mongooseRequiring = require("./db/moongose")
const tasks = require('./src/Routers/tasks')

const port = process.env.port


app.listen(port, console.log(`This is the server for Task manager  ${port}`))


app.use(express.json())
app.use(userRouter);
app.use(taskRouter)




// routes 

app.get('/hello', (req,res)=>  {
    res.send('Task manager first routes')
})

app.use('/api/v1/tasks', tasks)





