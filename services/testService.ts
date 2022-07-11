import connection from "../database.js";


async function testService() {
    
    const infos = await connection.query("SELECT * FROM businesses");

    if(infos.rowCount === 0){
        throw {a:"a"}
    }
    return infos
}

export default testService