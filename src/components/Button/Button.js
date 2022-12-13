export const Button = (props) => {
    return(
        <div className="btn-block">
            <button className="btn btn-primary btn-fluid">{props.children}</button>
        </div>
    );
}