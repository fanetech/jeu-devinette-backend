import { Sequelize } from 'sequelize'
export default new Sequelize('jeu-devinette', "root", 'root', { dialect: 'mysql', host: 'localhost'})