import './CityList.css';
import FormInput from '../FormInput/FormInput';
import CityItem from '../CityItem/CityItem';
import { useEffect, useState } from 'react';

const CityList = () => {
  // Estado para armazenar a lista de cidades que será exibida
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    getCityList(); // Carrega a lista de cidades ao montar o componente
  }, []);

  // Estado para armazenar os valores do formulário
  const [cidadesForm, setCidadesForm] = useState({
    name: '', //Nome do Lugar
    foto: '', //URL da foto do lugar
    country: '', //País do Lugar
    link: '', //Link para mais informações
  });

  // Função para lidar com a mudança nos campos de formulário
  const handleFieldsChange = (event) => {
    const { name, value } = event.target; // Captura o nome e o valor do input
    setCidadesForm({ ...cidadesForm, [name]: value }); // Atualiza o estado
  };

  // Função para lidar com o clique no botão de cadastrar
  const handleClick = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do form

    // Verifica se todos os campos foram preenchidos
    if (
      cidadesForm.name &&
      cidadesForm.foto &&
      cidadesForm.country &&
      cidadesForm.link
    ) {
      // Faz o POST se tudo estiver preenchido
      console.log('Enviando dados:', cidadesForm); // Debug
      const response = await fetch('http://localhost:3005/city', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cidadesForm),
      });

      const data = await response.json();
      alert(`Lugar ${data.name} cadastrado com sucesso!`);

      getCityList(); // Atualiza a lista de cidades após cadastro

      // Reseta o formulário
      setCidadesForm({
        name: '',
        foto: '',
        country: '',
        link: '',
      });
    } else {
      alert('Por favor, preencha todos os campos antes de cadastrar.');
    }
  };

  // Função para buscar a lista de cidades (método GET)
  const getCityList = async () => {
    const response = await fetch('http://localhost:3005/city'); // Faz a requisição para a API
    const data = await response.json(); // Converte a resposta para JSON
    setCidades(data); // Atualiza o estado com a lista de cidades
  };

  return (
    <section className="city">
      <h2>Veja as melhores Cidades do Mundo e Cadastre quais você acha que são as Melhores!</h2>
      <form className="form">
        <FormInput
          inputName="Nome" // Nome que aparece no label
          id="name"
          name="name" // Nome do campo, usado para atualizar o estado
          type="text" // tipo do input
          placeholder="Nome do Lugar" //texto placeholder
          value={cidadesForm.name} // Valor do campo (ligado ao estado)
          onChange={handleFieldsChange} // Função que atualiza o estado
        />
        <FormInput
          inputName="Foto"
          id="foto"
          name="foto"
          type="text"
          placeholder="Foto do Lugar"
          value={cidadesForm.foto}
          onChange={handleFieldsChange}
        />
        <FormInput
          inputName="País"
          id="country"
          name="country"
          type="text"
          placeholder="Nome do País"
          value={cidadesForm.country}
          onChange={handleFieldsChange}
        />
        <FormInput
          inputName="Link"
          id="link"
          name="link"
          type="text"
          placeholder="Link"
          value={cidadesForm.link}
          onChange={handleFieldsChange}
        />
        {/* Botão que aciona a função de cadastro */}
        <button type="submit" onClick={handleClick}>
          CADASTRAR
        </button>
      </form>

      {/* Renderiza a lista de cidades se houver cidades cadastradas    */}
      {cidades.length > 0 && (
        <ul className="city-list">
          {/* Filtra e mapeia as cidades para renderizar o componente CityItem */}
          {cidades.map((cidade, index) => (
            <CityItem cidade={cidade} key={index} /> // Renderiza o componente CityItem para cada cidade
          ))}
        </ul>
      )}
    </section>
  );
};

export default CityList;
