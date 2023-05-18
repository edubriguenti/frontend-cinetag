import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritosContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const {favoritos, adicionarFavorito} = useFavoritosContext();
    const ehFavorito = favoritos.some(favorito => favorito.id === id)
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={ehFavorito ? iconeDesfavoritar : iconeFavoritar} alt="Favoritar filme" className={styles.favoritar} 
            onClick={() => {
                adicionarFavorito({id, titulo, capa})
            }}
            />
        </div>
    )
}

export default Card;