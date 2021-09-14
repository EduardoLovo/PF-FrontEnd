import React from 'react';
import { Link } from 'react-router-dom';
import './TarefaCard.scss';

const TarefaCard = (props) => {
  const tarefa = props.tarefa;

  return (
    <Link to={`/view/${tarefa._id}`} className="card">
      <div>
        <div className="card-img">
          <img src={tarefa.capa} alt="" />
        </div>
        <p className="card-text">{tarefa.nome}</p>
        <span className="card-info">{tarefa.genero}</span>
      </div>
    </Link>
  )
}

export default MusicCard