const crypto = require('crypto'); //gera criptografia
const connection = require('../database/connection');

module.exports = { //exporta um objeto c os metodos, rota de criação de uma ong
    async index(request, response) { //rota p listar (get) tds as ongs do bd (tds os dados de uma tabela) - n usa na aplicação, mas é p ter um retorno se esta "ok"
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
},
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf} = request.body; //requisições q chegam por query
    
        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 digitos e converte p string em hexadecimal, em documentação consigo esse codigo

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        }) //por ser async/await, só executa o return qdo terminar de executar o await connection
        
        return response.json({ id });
        }

}; 