import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your Furniture to the next level!' />
          </div>
          <div>
            <button className='button-primary'>Create Your design</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner