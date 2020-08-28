import React, { useState } from 'react';
import logo from './styles/alternativa-2.jpg';
import './styles/app.css';
import { columns, detalhes, tableIcons } from './utils/table';
import Box from '@material-ui/core/Box';
import useStyles from './styles/styles';
import Button from '@material-ui/core/Button';
import MaterialTable from "material-table";
import { get, getDetail } from './utils/api';
import Search from '@material-ui/icons/Search';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

function App() {
  const classes = useStyles();
  
  const [show, setShow] = useState(false); // define que a tabela seja escondida por padrão

  const [data, setData] = useState([]);

  // pegando valores para consulta
  var [cnpj, setCnpj] = useState('');
  var [insc, setInsc] = useState('');  

  function handleSubmit(event) {
    event.preventDefault();
    get(input).then(res => {
      setData(res.data)
    })
    .catch (error => {
      setData([]) // esvaziar a tabela
      console.log(error)
    })  
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
          <ValidatorForm useref={"form"} className={classes.alignItemsAndJustifyContent} onSubmit={handleSubmit}>
            <TextValidator id="cnpj" label="CNPJ" variant="outlined"
             className={classes.tF1} value={cnpj} type="text"
             validators={['isNumber', 'matchRegexp:^[0-9]{14}$' ]}
             errorMessages={['Somente números!', 'CNPJ contém 14 dígitos!']}
             onInput={ e => setCnpj(e.target.value)}
             inputProps={
               {maxLength: 14}
             } />
            <TextValidator id="insc" label="Inscrição" variant="outlined" 
             className={classes.tF2} value={insc} 
             onInput={ f => setInsc(f.target.value) } 
             validators={['isNumber', 'matchRegexp:^[0-9]{9}$' ]}
             errorMessages={['Somente números!', 'Inscrição contém 9 dígitos!']}
             inputProps={
               {maxLength: 9}
             } />
            <Button id="search" variant="contained" className={classes.button} type="submit" onClick={() => setShow(true)} startIcon={<Search />}>Buscar</Button>
          </ValidatorForm>
          {show ?
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
              search: false, sorting: false, paging: false, headerStyle: { 
                    backgroundColor: 'lightgray', color: 'black'
                  }
            }}
            detailPanel={(rowData) => {
              return (
                <MaterialTable
                
                title="Historico de Bloqueios"
                
                columns={detalhes}

                icons={tableIcons}
                
                data = { query => new Promise((resolve) => {
                 getDetail(rowData.insc)
                    .then(response =>  response.json())
                    .then(result => {
                      resolve({
                        data: result
                     });
                 })
                }) }
                
                options={{
                  search: false, paging: false, sorting: false, headerStyle: { 
                    backgroundColor: 'lightgray', color: 'black'
                  }
                }}
                
                localization={{
                  body: {
                  emptyDataSourceMessage: 'Nenhum dado encontrado!'
                },
                }}
                  
                />
              )
            }}
            //onRowClick={(event, rowData, togglePanel) => togglePanel() }
            />
          </Box>
          : null}
        </div>
    </div>
  );
}

export default App;
