import React, { useState, useEffect, forwardRef  } from 'react';
import logo from './alternativa-2.jpg';
import './config/app.css';
import { TextField, Box } from '@material-ui/core';
import useStyles from './config/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
//import api from './api';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import account_circle from '@material-ui/icons/AccountCircleOutlined';


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  account_circle: forwardRef((props, ref) => <account_circle {...props} ref={ref} />)
};

const api = axios.create({
  baseURL: `http://10.75.9.84:3000/api`
})

function App() {
  const classes = useStyles();

  // colunas
  var columns2 = [
    {title: "Tipo de Bloqueio", field: "sit"},
    {title: "Data Inicial", field: "dt_inicial"},
    {title: "Motivo", field: "MOTIVO_INI"},
    {title: "Data Final", field: "dt_fim"},
    {title: "Motivo Final", field: "MOTIVO_FIM"}
  ]

  var columns = [
    {title: "Razão Social", field: "razao_social"},
    {title: "CNPJ", field: "cnpj"},
    {title: "Inscrição SUFRAMA", field: "insc"},
    {title: "Tipo da Inscrição", field: "tipo"},
    {title: "Situação", field: "sit"}
  ]

  // dados da tabela após consulta
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  // para gerenciar possíveis erros
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  function get(dados) {
    api.get(`/empresas/${dados.cnpj}?emp_insc=${dados.insc}`)
    .then(res => {
     setData(res.data)
    })
    .catch (error => {
     setErrorMessages(["Não foi possível carregar dados!"]);
     setIserror(true)
    }) 
}

function get2(insc) {
  //console.log('alo' + data2[0].SIT)
  api.get(`/historico?emp_insc=${insc}`)
  .then(res => {
   setData2(res.data2)
  })
  .catch (error => {
   setErrorMessages(["Não foi possível carregar dados!"]);
   setIserror(true)
  })
}
  

  // pegando valores para consulta
  var [cnpj, setCnpj] = useState('');
  var [insc, setInsc] = useState('');  

  function handleSubmit(event) {
    event.preventDefault();
    get(input);
  }

  // como fazer com que o detail table apresente o histórico de bloqueios!!
  function handleSubmit2(info) {
    console.log('ALO!!!@@@')
    get2(info);
  }

  var input = {
    cnpj,
    insc
  }


 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
        <h1>Cadastro Legado</h1>
        <h3>Somente Consulta</h3>
        <div style={{ width: '100%' }}>
          <form component="div" className={classes.alignItemsAndJustifyContent} onSubmit={handleSubmit}>
            <TextField id="cnpj" label="CNPJ" variant="outlined" className={classes.textField1} value={cnpj} onInput={ e => setCnpj(e.target.value)} />
            <TextField id="insc" label="Inscrição" variant="outlined" className={classes.textField2} value={insc} onInput={ f => setInsc(f.target.value)}/>
            <Button id="search" variant="contained" className={classes.button} type="submit" startIcon={<SearchIcon />}>Buscar</Button>
          </form>
          <Box component="div" className={classes.tabela}>
            <MaterialTable 
            title="Dados da Empresa"
            columns={columns}
            data={data}
            icons={tableIcons}
            localization={{
              body: {
                emptyDataSourceMessage: 'Nenhum dado encontrado!'
              },
            }}
            options={{
              search: false, sorting: false, paging: false
            }}
            detailPanel={(rowData) => {
              return (
                <MaterialTable
                
                title="Historico de Bloqueios"
                
                columns={columns2}

                icons={tableIcons}
                
                //FUNCIONAAAAAAAAAAAAAAAAAAAA
                data = { data => new Promise((resolve, reject) => {
                  console.log(rowData)
                 let url = `http://10.75.9.84:3000/api/historico?emp_insc=${rowData.insc}`
                 console.log(url);
                 fetch(url)
                    .then(response =>  response.json())
                    .then(result => {
                      
                      resolve({
                        data: result
                     });
                 })
                }) }
                
                options={{
                  search: false, sorting: false, paging: false
                }}
                
                localization={{
                  body: {
                  emptyDataSourceMessage: 'Nenhum dado encontrado!'
                },
                }}
                  
                />
                //<div onLoad={ e =>  }>{rowData.cnpj}</div>
              )
            }}
            //onRowClick={(event, rowData, togglePanel) => togglePanel() }
            />
          </Box>
        </div>
    </div>
  );
}

export default App;
