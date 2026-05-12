import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, "", {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

export const startDB = async () => {
    try {
        await sequelize.authenticate(),
            console.log("Se ha autenticado la DataBase"),
            await sequelize.sync()

    } catch (error) {
        error
    }
};