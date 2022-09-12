import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlackPawn from '../public/default-assets/black/pawn.svg'

export default function Home() {
  return (
    <>
      <p>This is index.js</p>
      <BlackPawn/>
    </>
  )
}
