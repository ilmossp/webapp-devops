import express from 'express'
import { sync,getUsers, updateUser, addUser, deleteUser } from './db.js'
const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/",(req,res)=>{
	res.send('hello world !')
})

app.post("/sync",(req,res)=>{
	sync()
	res.send('synced')
})

app.get("/users",async (req,res)=>{
	const users = await getUsers()
	 res.json(users)
})
app.patch("/user/:id",async (req,res) => {
	const user = await updateUser({ id : req.params.id , username: req.body.username})
	res.json(user)
})

app.post("/user",async (req,res) => {
	const user = await addUser({...req.body})
	res.json(user)
})

app.delete("/user/:id",async (req,res) => {
	const user = await deleteUser(req.params.id)
	res.json(user)
})
app.listen(port,()=>{
	console.log("server listening on port : ",port)
})
