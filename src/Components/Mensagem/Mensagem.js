import './Mensagem.css';

const Mensagem = ({cor, children}) => {
    return (
        <div className="mensagem">
            <h3>Pronto para embarcar em uma viagem?</h3>
            <p style={{color: cor}}>{children}</p>
        </div>
    )
}

export default Mensagem;