import React from 'react';
import { Link } from 'react-router-dom';
import './TarefaCard.scss';

const TarefaCard = (props) => {
  const tarefa = props.tarefa;

  return (
    <Link to={`/view/${tarefa._id}`} className="card">
      <div>
        <div className="card-img">
          <img src={"https://store-images.s-microsoft.com/image/apps.64291.9007199266483650.4f907d9a-c60f-4272-8000-be3bf737f363.47c91d60-546d-43ba-b713-671493401c50?mode=scale&q=90&h=300&w=300"} alt="" />
        </div>
        <p className="card-text">{tarefa.Titulo}</p>
        <span className="card-info">{tarefa.Descuricao}</span>
      </div>
    </Link>
  )
}

export default TarefaCard