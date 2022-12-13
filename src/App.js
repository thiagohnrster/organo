import './styles/css/font-face.css';
import './styles/css/layout.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdd = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
    document.querySelector('.floating-btn').style.transform = 'rotate(0deg)';
    document.querySelector('.floating-btn').style.boxShadow = '-4px 4px 4px rgba(0, 0, 0, .25)';
    setIsOpened(false);
  }

  const toggle = () => {
    var element = document.querySelector('.floating-btn');
    
    setIsOpened(wasOpened => !wasOpened);

    if(!isOpened) {
      setTimeout(() => {
        element.style.transform = 'rotate(-135deg)';
        element.style.boxShadow = '0px -4px 4px rgba(0, 0, 0, .25)';    
        document.querySelector('input').focus();
        document.getElementById('create-collaborator').scrollIntoView({behavior: 'smooth', block: 'end'});
      }, 100)
    } else {
      element.style.transform = 'rotate(0deg)';
      element.style.boxShadow = '-4px 4px 4px rgba(0, 0, 0, .25)';
    }
  }

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];

  return (
    <div className="App">
      <Header />
      <Banner />
      <FloatingButton onPress={toggle} />
      {isOpened ? <Form times={times.map(time => time.nome)} collaboratorCreated={collaborator => newCollaboratorAdd(collaborator) } /> : ''}
      {collaborators.length ? <h2 style={{ marginTop: isOpened ? 0 : ''}} className='main-title'>Minha Organização</h2> : ''}  
      {!isOpened && !collaborators.length ? <section className="is-empty-placeholder">
        <h2>Nenhum colaborador cadastrado.</h2>
      </section> : ''}
      {times.map((time, index) => <Team 
        key={index} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        collaborators={collaborators.filter(collaborator => collaborator.time === time.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
