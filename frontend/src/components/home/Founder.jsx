import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/imgf.jpg"

const options={
    initial:{
        x:"-100%",
        opacity:0
    },
    whileInView:{
        x:"0",opacity:1
    }
}

function Founder() {
  return (
    <section className='founder'>
        <motion.div 
        {...options}>
            
            <img src={me} alt="Founder" height={200} width={200} />
            <h3>Kumar Gaurav</h3>
            <p>Hey Everyone I am Kumar Gaurav, the founder of MBA Burger Wala.
                <br />
                Our aim is to serve you the tastiest burger you would have ever had.
            </p>
        </motion.div>
    </section>
  )
}

export default Founder