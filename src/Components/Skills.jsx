// eslint-disable-next-line no-unused-vars
import React from 'react'
import skills from './data/Data/skills.json'
const Skills = () => {
  return (
    <>
    <div className="container skills" id='skills'>
      <h1>Skills</h1>

      <div className="items" >

      {
      skills.map((data)=>{
        return (
          <>
            <div className="item" key={data.id}
            data-aos="flip-left"
                
            >
            <img src={`/public/images/Images/${data.imageSrc}`}/>
            <h1>{data.title}</h1>
            </div>
          
          </>
        )
        
        
      })
    }
          </div>

    </div>
   
        </>

  )
}

export default Skills