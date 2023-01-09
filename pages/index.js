import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Home = ({ data }) => {
  const [state,setState]=useState(false);
  let url="https://github.com/Ashmit-1131";
  let url2="https://drive.google.com/file/d/138ETL8CwKA0GKHnvJp7ZOk7Dt0rOBq4B/view?usp=share_link"


  return (
    <div>

      <Image src="https://avatars.githubusercontent.com/u/108016803?v=4" alt="image" width={200} height={200} />
      <h1>Ashmit Yadav</h1>
      <p>Ashmit-1131</p>
      <div>
        <p>Full-stack Developer | FOSS | JavaScript </p>
          <p>| Typescript | NodeJS | Deno |ReactJS | </p>
           <p>  HTML | CSS | Chakra-UI | MUI</p>
      </div>
      
      <div style={{gap:"10px"}}> 
      <a href={url2}> <button>Resume</button></a>

      <a href={url}> <button>Follow</button></a>
    
      
      </div>
     
      {
        data.map((el) => {
          const { owner } = el
          

          
          
          return (
            <>

    
              <h1 >{el.full_name}</h1>

              <Link href={el.html_url}>

                <h1>page</h1>

              </Link>

              <h3>{el.size}</h3>
              <h2>{el.forks_count}</h2>


            </>
          )
        })
      }


    </div>
  )
}




export async function getServerSideProps() {

  let res = await fetch("https://api.github.com/search/repositories?q=user:Ashmit-1131+fork:true&sort=updated&per_page=10&type=Repositories")
  let d = await res.json();

  return {
    props: {
      data: d.items,
    },
  }
}


export default Home