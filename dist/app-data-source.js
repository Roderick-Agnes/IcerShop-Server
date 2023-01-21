"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDataSource = void 0;
const typeorm_1 = require("typeorm");
const connectDataSource = () => {
    const MysqlDataSource = new typeorm_1.DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "bus_data",
        logging: true,
        synchronize: false,
        entities: [
            "src/entity/*.js"
        ],
    });
    MysqlDataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!");
    })
        .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
};
exports.connectDataSource = connectDataSource;
