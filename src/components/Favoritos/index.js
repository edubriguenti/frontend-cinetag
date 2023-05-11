import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import React from 'react'
import styles from './Favoritos.module.css'
import Card from 'components/Card'
import { useFavoritosContext } from 'contextos/Favoritos'

export default function Favoritos() {
  const { favoritos } = useFavoritosContext();
  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favoritos.map(favorito => {
            return <Card {...favorito} key={favorito.id} />
        })}
      </section>
    </>
  )
}
