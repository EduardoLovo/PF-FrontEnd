import React, { useEffect, useState } from 'react';
// import MusicCard from '../MusicCard/MusicCard';
import './TarefaList.scss';
import { Api } from '../../../api/api';

const TarefaList = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(()=> {
    getTarefas();
  }, [])

  const getTarefas = async () => {
    //GET - estou enviando uma requisao get para o backend.
    // response = a resposta que o servidor traz da chamada (carta fechada).
    const response = await Api.fetchGet();
    // data = é o dado que eu recebo apos o ok da promessa do response (conteudo da carta).
    const data = await response.json();
    setTarefas(data);
  }

  return (
    <div className="list">
      {tarefas.map((tarefa, index) => (
        <TarefaCard tarefa={tarefa} key={tarefa._id}/>
      ))}
    </div>
  )
}

export default TarefaList