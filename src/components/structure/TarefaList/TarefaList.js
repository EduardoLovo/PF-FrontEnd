import React, { useEffect, useState } from 'react';
import TarefaCard from '../TarefaCard/TarefaCard';
import './TarefaList.scss';
import { Api } from '../../../api/api';

const TarefaList = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(()=> {
    getTarefas();
  }, [])

  // const url = 'http://localhost:3000/tarefas'

  const getTarefas = async () => {
    const response = await Api.fetchGet();
    const data = await response.json();
    setTarefas(data);
    console.log('tarefas=', data);
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