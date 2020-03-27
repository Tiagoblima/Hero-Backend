const connection = require('../database/connection');

module.exports = {
    async index(request, response){

        const { page = 1} = request.query;
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
        .where('ong_id', ong_id).select('*');

        return response.json(incidents);
    }
}