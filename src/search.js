import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
    baseURL: 'localhost:3000/api/'
});

  // dados da tabela após consulta
  const [data, setData] = useState([]);

  // para gerenciar possíveis erros
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

useEffect(() => {
    api.get("/empresas/")
    .then(res => {
      setData(res.data)
    }).catch (error => {
      setErrorMessages(["Não foi possível carregar dados!"]);
      setIserror(true)
    })
  }, [])

export { api, data };