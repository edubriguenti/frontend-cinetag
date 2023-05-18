import Titulo from 'components/Titulo';
import styles from './Player.module.css';
import Banner from 'components/Banner';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

export default function Player() {
    const [video, setVideo] = useState({});
    const parametros = useParams();
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/edubriguenti/cinetag-api/videos/${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(dados)
            })
    }, [parametros.id])

    if (!video) {
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </section>
        </>
    )
}