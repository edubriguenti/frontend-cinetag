import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritosContext } from 'contextos/Favoritos';

function Card({ id, titulo, capa }) {
    const {favoritos, adicionarFavorito} = useFavoritosContext();
    const ehFavorito = favoritos.some(favorito => favorito.id === id)
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={ehFavorito ? iconeDesfavoritar : iconeFavoritar} alt="Favoritar filme" className={styles.favoritar} 
            onClick={() => {
                adicionarFavorito({id, titulo, capa})
            }}
            />
        </div>
    )
}

export default Card;