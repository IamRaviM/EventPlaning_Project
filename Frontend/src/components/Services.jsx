import React from 'react'

const Services = () => {
  const services = [
    {
      id:1,
      url:"/birthday.jpg",
      title:"Birthday Planning"
    },
    {
      id:2,
      url:"/camping.jpg",
      title:"Camping Plannig"
    },
    {
      id:3,
      url:"/anniversary.jpg",
      title:"Anniversary Planning"
    },
    {
      id:4,
      url:"/gamenight.jpg",
      title:"Game night Planning"
    },
    {
      id:5,
      url:"/party.jpg",
      title:"Party Plannig"
    },
    {
      id:6,
      url:"/wedding.jpg",
      title:"Wedding Plannig"
    },

  ];
  return (
    <>
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((element)=>{
            return (
              <div className="item" Key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title}/>
              </div>
            )
          })}

      </div>
    </div>
    </>
  )
}

export default Services;
