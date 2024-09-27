import './FormInput.css';

// Componente que renderiza um campo de formulário, aceitando props dinâmicos
const FormInput = ({ inputName, name, value, onChange, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{inputName}:</label>
      {/* Conectando o valor e o onChange ao input */}
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={name} // Certifique-se de que o name está correto
        value={value} // Valor vindo do estado do componente pai
        onChange={onChange} // Função que atualiza o estado no componente pai
      />
    </div>
  );
};

export default FormInput;
