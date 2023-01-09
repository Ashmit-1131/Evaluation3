import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Project = ({data}) => {


  return (
    <div style={{display:"flex",gridTemplateColums:repeat("1","3fr")}}>


        {
            data.map((el)=>{
                const {owner}=el
                return(
                    <>
                        
                  
                    <h1 style={{color:"white"}}>{el.full_name}</h1>

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

  let res= await fetch("https://api.github.com/search/repositories?q=user:Ashmit-1131+fork:true&sort=updated&per_page=10&type=Repositories")
     let d= await res.json();

    return {
      props: {
        data:d.items,
      }, 
    }
 }


export default Project