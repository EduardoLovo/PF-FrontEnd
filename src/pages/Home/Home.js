import React from 'react';
import TarefaList from '../../components/structure/TarefaList/TarefaList';
import './Home.scss';

const Home = () => {
  return (
    <section className="content">
      <h1 className="content-title">Listagem de tarefas</h1>
      <div className="content-list">
        <h1>To Do List</h1>
        <TarefaList />
      </div>
    </section>
  )
}

export default Home