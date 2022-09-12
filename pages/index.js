import Head from 'next/head'
import Image from 'next/image'
import { Figure, Board } from '../components'

export default function Home() {
  return (
    <>
      <p>This is index.js</p>
      <Figure/>
      <Board/>
    </>
  )
}
