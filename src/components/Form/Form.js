import Textfield from '../Textfield'
import Selectbox from '../Selectbox'
import Button from '../Button'
import { useState } from 'react';

export const Form = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.collaboratorCreated({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('');
        setCargo('');
        setTime('');
        setImagem('');
    }

    return(
        <section id='create-collaborator' className='form-section'>
            <div className='content'>
                <form className='form-container' onSubmit={onSave}>
                    <h3 className='title'>Preencha os dados para criar o card do colaborador.</h3>
                    <Textfield valor={nome} whenChanged={valor => setNome(valor)} label="Nome" placeholder="Digite o seu nome" isRequired={true} />
                    <Textfield valor={cargo} whenChanged={valor => setCargo(valor)} label="Cargo" placeholder="Digite o seu cargo" isRequired={true} />
                    <Textfield valor={imagem} whenChanged={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" />
                    <Selectbox valor={time} whenChanged={valor => setTime(valor)} label="Time" itens={props.times} isRequired={true} />
                    <Button>Criar card</Button>
                </form>
            </div>
        </section>
    )
}