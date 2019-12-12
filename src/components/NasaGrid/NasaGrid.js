import React, { useState, useEffect } from "react";
import NasaCard from '../NasaCard/NasaCard'
import axios from 'axios'
import { Container } from "../StyledComponents/Styles";
import Example from "../Carousel/Carousel"





export default function NasaGrid() {
  const [epicImage, setEpicImage] = useState([])
  const sliced = epicImage.slice(0, 20)


  useEffect(() => {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=uR2wwrGRUDbMg5zo8jgbLovwQNm2v0E0V4xhLpnA')
      .then(response => {
        console.log(response.data.photos[1])
        setEpicImage(response.data.photos)
      })
      .catch(error => {
        console.log('bruh come on', error)
      })
  }, [])

 

  return (
      <Container>
      <div className='entry'>
        {sliced.map((item, index) => {
          return (
            <NasaCard key={index} eimg={item.img_src} eDate={item.earth_date} eID={item.id} />
          )
        })}
       
        <Example sliced={sliced}/>
         
      </div>
      </Container>
    
    
  )
}



