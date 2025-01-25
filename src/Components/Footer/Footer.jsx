import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <>
    <footer className='bg-dark  py-4'>
    <footer className={`${styles.footer}`}>
        
        <div className="container">
          <a href="" className={`${styles.anc}`}>Questions? Contact us.</a>
          <div className="row">
            <div className= {`${styles.deco} col-md-2 `}>
              <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
            </div>
            <div className={`${styles.deco} col-md-2 `}>
              <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
            </div>
            <div className={`${styles.deco} col-md-2 `}>
              <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate.Information</li>
                    <li>Only on Netflix</li>
                </ul>
            </div>
            <div className={`${styles.deco} col-md-2 `}>
              <ul>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>
          </div>
        </div>
        



        
        </footer>

    </footer>
      
    </>
  )
}
