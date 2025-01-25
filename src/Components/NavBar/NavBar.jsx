import React, { useContext } from 'react'
import logo from '../../assets/images/images.png'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { CounterContext } from '../../Context/CounterContext'
import { CartContext } from '../../Context/CartContext'


export default function NavBar({userData  ,logOut}) {
  let {numOfCartItem ,CartId}=useContext(CartContext)
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
  <div className="container">
    <a className={`${styles.log} navbar-brand`} href="#">
      <img src={logo} className={`${styles.hola}`}  alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={''}>Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='product'>Product</Link>
        </li> */}
        
     
        
       
      </ul>}
      
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li  className='mx-2 '>
          <i className='fa-brands fa-facebook-f text-white nav-link'></i>
        </li>
        <li  className='mx-2'>
          <i className='fa-brands fa-twitter text-white'></i>
        </li>
        <li className='mx-2'>
          <i className='fa-brands fa-instagram text-white'></i>
        </li>

        </ul>
     


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {userData ?    <>
        
        <li className="nav-item">
          <span className="nav-link active cursor-pointer" aria-current="page" onClick={logOut}>Logout</span>
        </li>
          <li className="nav-item position-relative">
          <Link className="nav-link active" aria-current="page" to='cart'>
          <i className='fa fa-shopping-cart lg-l'></i>
          <div className="badge bg-main position-absolute top-0 end-0">
            {numOfCartItem}
          </div>
          </Link>
        </li>
        </>  :<>
        
         <li className="nav-item">
          <Link className= {`${styles.navLink} nav-link active`} aria-current="page" to='login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='register'>Register</Link>
        </li>
        </>
       }
        
        
     
        
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}
