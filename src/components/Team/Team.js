import Collaborator from "../Collaborator";

export const Team = (props) => {
    const cssCorSecundaria = { backgroundColor: props.corSecundaria };

    return(
        props.collaborators.length > 0 ? <section className="team" style={ cssCorSecundaria }>
            <div className="content">
                <h3 className="teamname-title">{props.nome} <span style={{ borderColor: props.corPrimaria }} className="dash"></span></h3>
                <div className="collaborators-listing">
                    {props.collaborators.map((collaborator, index) => <Collaborator 
                        key={index} 
                        nome={collaborator.nome} 
                        cargo={collaborator.cargo} 
                        imagem={collaborator.imagem} 
                        corDeFundo={props.corPrimaria}
                    />)}
                </div>
            </div>
        </section> : ''
    );
}