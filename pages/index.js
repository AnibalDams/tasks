import Head from 'next/head'
import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import {PrimaryButton} from '@fluentui/react'


export default function Home(props) {
  console.log(props.movie)

  return (
      <div style={{display:'flex' ,margin:'20px'}}>{props.movie.map(movies =>{return(<div key={movies.imdbID}><h1 >{movies.Title}</h1> <p>{movies.Type}</p><img src={movies.Poster} alt={ `${movies.Title} Poster`}/></div>)})}</div>
  )
}

Home.getInitialProps = async () =>{
        const res  = await fetch('http://www.omdbapi.com/?apikey=ace993e9&s=mr%20robot')
        const {Search} = await res.json()

        return{movie: Search}
}
