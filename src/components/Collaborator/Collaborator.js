export const Collaborator = (props) => {
    return(
        <div className="collaborator-card">
            <div style={{backgroundColor: props.corDeFundo}} className="collaborator-header">
                <img src={props.imagem} title={props.nome} alt={props.nome} />
            </div>
            <div className="collaborator-body">
                <h3 className="collaborator-title">{props.nome}</h3>
                <p className="collaborator-text">{props.cargo}</p>
            </div>
        </div>
    );
}