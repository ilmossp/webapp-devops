import { Sequelize, Model, DataTypes } from "sequelize"
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_URL)


class User extends Model { }

User.init({
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	type: DataTypes.STRING
}, { sequelize, modelName: 'user' });

const sync = async () => {await User.sync({ force: true })
	console.log('synced')
}

const addUser = async ({ username, password, type }) => {
	console.log(username)
	const user = await User.create({ username , password, type })
	return user.toJSON()
}

const getUsers = async () => {
	const users = await User.findAll()
	return users
}

const updateUser = async ({id,username}) => {
	const user = await User.update({username},{where: {id}})
	console.log(user)
	return user
}

const deleteUser = async (id) => {
	const user = await User.destroy({where: {
		id
	}})
	console.log(user)
	return user
}

export {sync,addUser,updateUser,deleteUser,getUsers}
