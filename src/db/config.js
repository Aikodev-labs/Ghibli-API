const moongoose = require('mongoose');

const db = async () => {

    try{
        await moongoose.connect( process.env.DB_CNN );
        console.log('DB online');
        
    }catch(error){
        console.error(error);
        console.log(process.env.DB_CNN)
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }

}

module.exports = {
    db
}