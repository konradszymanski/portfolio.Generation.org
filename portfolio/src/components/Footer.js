import React from 'react'
import '../styles/footer.css'
const Footer = () => {
    const social = [
        {
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/konrad-szymanski-92790311a',
            img: '/icons/linkedin.png'
        },
        {
            title: 'GitHub',
            link: 'https://github.com/konradszymanski'
        }
    ]

    return (
        <footer>
            <ul>
                {social.map((item, index) =>
                    <li key={index}>
                        <a href={item.link} target='_blank' rel="noreferrer">
                            <img
                                src={item.img} alt={item.title} rel="noreferrer" >
                            </img>
                        </a>
                    </li>
                )}
            </ul>
        </footer>
    )
}

export default Footer


// <footer id="footer">
//                 <!-- social icons-->
//                 <a href="https://github.com/konradszymanski" target="_blank">
//                     <img src="/icons/iconfinder_mark-github_298822.svg">
//                 </a>
//                 <a href="https://konrad.site/" target="_blank">
//                     <img class="konradSite" src="/icons/konradSiteLogo.png">
//                 </a>
//                 <a href="https://www.linkedin.com/in/konrad-szymanski-92790311a/" target="_blank">
//                     <img class="linkedIn" src="/icons/iconfinder_51-linkedin_104452.svg">
//                 </a>
//             </footer>