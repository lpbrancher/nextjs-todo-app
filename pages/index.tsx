import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import List from '@/components/List'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData]=useState([])
  const getData = () => {
    fetch('default_list.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then(function(response){
      return response.json()
    }).then(function(myJson){
      console.log(myJson);
      setData(myJson);
    })
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="container">
          <header className='header'>
            <h1>TODO</h1>
            <button className="change_style">
            </button>
          </header>
          <List data={data}/>
        </div>
      </main>
    </>
  )
}
