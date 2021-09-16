import React, { useEffect, useState } from 'react'
import './TarefaView.scss';
import { Api } from '../../api/api'
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'


const TarefaView = (props) => {
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
  useEffect(() => {
    getTarefaById();
  }, [])

  
  const id = props.match.params.id;
  
  
  const getTarefaById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setTarefa(data);
    console.log(tarefa);
    console.log()
    
  }

  const handleDelete = async (evento) => {
    evento.preventDefault();
    const resposta = await Api.fetchDelete(id);
    const result = await resposta;
    console.log(result);
    props.history.push("/");
    
  }
  
  return (
    <section className="view">
      <div className="view-img">
        <img src={"https://store-images.s-microsoft.com/image/apps.64291.9007199266483650.4f907d9a-c60f-4272-8000-be3bf737f363.47c91d60-546d-43ba-b713-671493401c50?mode=scale&q=90&h=300&w=300"} alt={tarefa.titulo}/>
      </div>
      <div className="view-info">
        <p className="view-info-text"><b>Titulo:</b> { tarefa.titulo }</p>
        <p className="view-info-text"><b>Descricao:</b> { tarefa.descricao }</p>
        <p className="view-info-text"><b>Prioridade:</b> { tarefa.prioridade }</p>
        <p className="view-info-text"><b>Status:</b> { tarefa.status }</p>
        <p className="view-info-text"><b>Prazo:</b> { tarefa.prazo }</p>
        <p className="view-info-text"><b>Data Criacao:</b> { tarefa.dataCriacao }</p>
        <Link to={`/edit/${tarefa._id}`} >
          <button className="btn btn-success">Editar</button>
        </Link>
        <button className="btn btn-danger" onClick={onOpenModal}>Excluir</button>
      </div>
      <Modal open={open} onClose={onCloseModal} center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
      >
        <h2>Deseja realmente Excluir ?</h2>
        <button onClick={handleDelete} className="buttons">SIM</button>
        <button onClick={onCloseModal} className="buttons">NAO</button>
      </Modal>
    </section>
  )
}

export default TarefaView