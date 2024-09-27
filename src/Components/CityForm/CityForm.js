import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import './CityForm.css';

const CityForm = () => {
    return (
        <form className="form">
            <FormInput inputName="Nome" id="nome" type="text" placeholder="Nome Completo" />
            <FormInput inputName="Email" id="email" type="email" placeholder="exemplo@email.com" />
            <Button text="Enviar" type="Submit" />
        </form>
    )
}

export default CityForm;