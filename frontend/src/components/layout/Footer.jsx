import React from 'react'
import {AiFillInstagram,AiFillTwitterCircle,AiFillFacebook} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
    <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you best taste possible
            <br />
            <em>We give attention to geniune feedback.</em>
            <strong>All rights reserved @mbaburgerwala</strong>            
        </p>
    </div>
    <aside>
        <h4>Follow Us</h4>
        <a href="#"><AiFillTwitterCircle/></a>
        <a href="#"><AiFillFacebook/></a>
        <a href="#"><AiFillInstagram/></a>
    </aside>
    </footer>
  )
}

export default Footer