import React from 'react';
import { Link } from 'react-router-dom';
import './TarefaCard.scss';

const TarefaCard = (props) => {
  const tarefa = props.tarefa;

  return (
    
    <Link to={`/view/${tarefa._id}`} className="card">
      <div>
        <div className="card-img">
          <img src={"https://warsaw.com.br/wp-content/uploads/2020/09/teste.png"} alt="" />
        </div>
        <p className="card-text">{tarefa.Titulo}</p>
        <span className="card-info">{tarefa.Descuricao}</span>
      </div>
    </Link>
    

    
  )
}

export default TarefaCard