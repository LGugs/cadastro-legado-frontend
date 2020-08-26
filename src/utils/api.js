import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
});

// dados da tabela após consulta
//const [data, setData] = useState([]);

// para gerenciar possíveis erros
//const [iserror, setIserror] = useState(false)
//const [errorMessages, setErrorMessages] = useState([])

export function get(dados) {
    return api.get(`/empresas/${dados.cnpj}?emp_insc=${dados.insc}`)
}

export function getDetail(dados) {
    return fetch(`${process.env.REACT_APP_API_URL}/historico?emp_insc=${dados.insc}`)
}
