import React, { useEffect, useState } from "react";
import { Api } from '../../api/api';

const TarefaEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getTarefaById();
  },[])

  const getTarefaById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
  }

  const handleFieldsChange = (evento) => {
    // clono o meu objeto do estado
    const auxFields = { ...fields };
    auxFields[evento.target.titulo] = evento.target.value;
    setFields(auxFields);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dados = { ...fields };
    dados.dataCriacao = parseFloat(dados.dataCriacao);
    const result = await Api.fetchPut(dados, id);
    const response = await result.json();
    console.log(response);
  }

  return (
    <section className="add">
      <h1>Editar - Titulo da Tarefa</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-group">
          <label htmlFor="titulo" className="add-form-group-label">
            Titulo
          </label>
          <input
            type="text"
            id="nome"
            name="titulo"
            value={fields.titulo}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="descricao" className="add-form-group-label">
            Descricao
          </label>
          <input
            type="text"
            id="autor"
            name="descricao"
            value={fields.descricao}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="prioridade" className="add-form-group-label">
            Prioridade
          </label>
          <input
            type="text"
            id="genero"
            name="prioridade"
            value={fields.prioridade}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="status" className="add-form-group-label">
            Status
          </label>
          <input
            type="text"
            id="capa"
            name="status"
            value={fields.status}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="prazo" className="add-form-group-label">
            Prazo
          </label>
          <input
            type="text"
            id="letra"
            name="prazo"
            value={fields.prazo}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        {/* <div className="add-form-group">
          <label htmlFor="duracao" className="add-form-group-label">
            
          </label>
          <input
            type="text"
            id="duracao"
            name="duracao"
            value={fields.duracao}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div> */}
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default TarefaEdit;