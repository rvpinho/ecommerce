import { mysql } from "../../database/clients.js"


export class EnderecoController {

    async handle(request, response) {

        const { nome, estado_id } = request.body;

        const sql = `INSERT INTO endereco (nome, estado_id) VALUES ('${nome}', ${estado_id})`;

        mysql.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        }
        );
             

    }
}