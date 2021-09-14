import React, { useEffect, useState } from 'react'
import './TarefaView.scss';
import { Api } from '../../api/api'
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


const TarefaView = (props) => {
  const [tarefa, setTarefa] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
  useEffect(() => {
    getTarefaById();
  }, [])

  // pegar o id e  chamar a api na url http://localhost:3002/tarefas/FindById/
  // passando o id que eu recebi
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
        <img src={tarefa.capa} alt={tarefa.nome}/>
      </div>
      <div className="view-info">
        <p className="view-info-text"><b>Nome:</b> { tarefa.nome }</p>
        <p className="view-info-text"><b>Autor:</b> { tarefa.autor }</p>
        <p className="view-info-text"><b>Letra:</b> { tarefa.letra }</p>
        <p className="view-info-text"><b>Duracao:</b> { tarefa.duracao }</p>
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