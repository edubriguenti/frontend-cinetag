import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import React from 'react'
import styles from './Favoritos.module.css'
import Card from 'components/Card'

export default function Favoritos() {
  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id='1' titulo='Teste' capa='https://media.istockphoto.com/id/1361394182/pt/foto/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=1024x1024&w=is&k=20&c=wSAG024ynou3bh3JZ_1CKM7FSDZJpkB5vgsHwC9HZuM=' />
      </section>
    </>
  )
}
