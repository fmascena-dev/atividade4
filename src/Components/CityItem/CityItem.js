import './CityItem.css';

const CityItem = ({cidade}) => {
    return (
        <li className="city-item">
            <img src={cidade.foto} alt= {cidade.name} />
            <h4> {cidade.name} </h4>
            <p><em>País:</em> <strong> {cidade.country} </strong></p>
            <a href={cidade.link} target="_blank" rel="noopener noreferrer" className="button-link">
                <button>SAIBA MAIS!</button>
            </a>
        </li>
    )
}
 export default CityItem;