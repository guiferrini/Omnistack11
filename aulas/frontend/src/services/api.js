import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api; // este comando permite q outros arquivos conseguem importar este arquivo
