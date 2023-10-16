

import React from 'react'
import style from '../Style/Footer.module.css'
import img1 from '../Images/footer.png'


const ULSize={
  fontWeight:"bold"
}
function Footer() {
  return (
    <>
    <div className={style.mainfooter}>
      <div className={style.footerflex}>
            <div>
            <img src={img1} alt="" height={30}/>
            <p className={style.para}> Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Dolore accusantium pariatur aliquid facere nobis<br/> harum eveniet veritatis debitis officia necessitatibus.</p>
            </div>

            <div className={style.footerFlexContent}>
              <ul className={`${style.footerUL} `}>
                <span style={ULSize}> UseFull Link</span>          
              <li>Documentation</li>
              <li>Support</li>
              <li>Privacy and terms</li>
              <li>SiteMap</li>
              <li>Customers</li>
              </ul>
            </div>

            <div className={style.footerFlexContent}>
            <ul className={style.footerUL}>
            <span style={ULSize}> Help</span> 
              <li>Home</li>
              <li>AboutUs</li>
              <li>Business Partnership</li>
              <li>Blog</li>
              <li>ContactUs</li>
              </ul>
            </div>

            <div className={style.footerFlexContent}>
            <ul className={style.footerUL}>
            <span style={ULSize}> Policy</span> 
              <li>Privacy Policy</li>
              <li>Terms and Condition</li>
              <li>Privacy and terms</li>
              <li>Retrun Policy</li>
              <li>Refund Policy</li>
              <li>Ip policy</li>
              </ul>
            </div>

            <div className={style.footerFlexContent}>
            <ul className={style.footerUL} >
            <span style={ULSize}> Social</span> 
              <li>Facebook</li>
              <li>Google</li>
              <li>Pinterest </li>
              <li>LinkedIn</li>
              <li>Dribble</li>
            </ul>
            </div>
<<<<<<< HEAD
        </div>
=======
          
          
            
      </div>
>>>>>>> origin/main
    </div>
    </>
  )
}

export default Footer