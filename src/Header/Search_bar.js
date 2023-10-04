import React from 'react'
import style from '../Style/Search.module.css'
import img1 from '../Images/footer.png'

function Search_bar() {
  return (
    <>
    <div className={style.Search_bar} >
        
{/* ======================================================== */}
      <div className={style.Logo}>
            <img src={img1} alt='' className={style.img} />
        </div> 
{/*============================================================= */}

     <input type='text' placeholder='Search for the Product and Mediciens'  className={style.Search}   />
    
     
  
    
     

     {/* ================================================================ */}

     <div className={style.Login}>
        <button className={style.button}>Login</button>
        <button className={style.button}>Register</button>
        <button className={style.button}>card</button>
        <button className={style.button}>
            profile
            
  
        </button>
        <button  style={{backgroundColor:'#448EE4' ,border:'none' ,color:'white'}} className={style.button} >Upload</button>
     </div>




    </div>


      
    </>
  )
}

export default Search_bar
