import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'


function CadastroDeCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
 }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
}

function HandleChange(infoEventos) {
  // const { getAttribute, value } = infoEventos.target;
 setValue(
  infoEventos.target.getAttribute('name'),
  infoEventos.target.value,
  );
}

  


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(infoEventos) {
        infoEventos.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

     <FormField
     label="Nome Da Categoria:"
     type="text"
     name="nome"
     value={values.nome}
     onChange={HandleChange}
     />

          <div>
     <FormField 
     label="Descriçao:"
     type="text"
     name="descricao"
     value={values.descricao}
     onChange={HandleChange}
     />
          {/* <label>
            Descrição:
          <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={HandleChange}
            />
          </label> */}
          </div>
          <div>
      <FormField 
     label="Cor:"
     name="cor"
     type="color"
     value={values.cor}
     onChange={HandleChange}
     />
       {/*    <label>
            Cor:
          <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={HandleChange}
            />
          </label> */}
        </div>

      
        <button>
          Cadastrar
        </button>
  
      
      </form>



      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )


        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroDeCategoria;