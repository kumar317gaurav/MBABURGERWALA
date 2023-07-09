import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'
import me from "../../assets/imgf.jpg"

const about = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>

            <article>
                <h4>MBA Burger Wala</h4>
                <p>We are MBA Burger Wala. The place for most tasty burgers on the earth.</p>
                <p>
                    Explore various type of food and burgers. Click below to see the menu
                </p>

                <Link to="/">
                    <RiFindReplaceLine/>
                </Link>
            </article>

            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="Founder" />
                        <h3>Kumar Gaurav</h3>
                    </div>

                    <p>I am Kumar Gaurav, the founder of MBA Burger Wala. Affliated to God Taste</p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default about