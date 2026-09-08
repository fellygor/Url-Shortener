import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

export default function Footer(){
    const footerMenuItems = [
               {
            id: 1, 
            name: 'Features',
            children: ['Link Shortening','Branded Links','Analytics']
        }, 
        {
            id: 2, 
            name: 'Resources',
            children: ['Blog','Developers', 'Support']

        }, 
        {
            id: 3, 
            name: 'Company',
            children: ['About','Our Team','Careers', 'Contact']
        } 
    ];

    return(
        <footer>
            <div className="container footer-container">
                <h2 className="footer-logo">Shortly</h2>
                    <div className="footer-links">
                            { footerMenuItems.map((footerMenuItem, index) => (
                                <div key={index} className='footer-column'>
                                    <h4>{footerMenuItem.name}</h4>
                                    <ul>
                                        { footerMenuItem.children.map((child, childIndex) => (
                                                <li key={childIndex}>{child}</li>
                                            ))
                                        }
                                    
                                    </ul>
                                </div>
                                ))
                            }
                    </div>
                    <div className="social-links">
                     <a href="#fb"><img src={facebook}/></a>
                     <a href="#fb"><img src={twitter}/></a>
                     <a href="#fb"><img src={pinterest}/></a>
                     <a href="#fb"><img src={instagram}/></a>
                 </div>
            </div>
        </footer>
        // <footer>
        //     <div className="container footer-container">
        //         <h2 className="footer-logo">Shortly</h2>
        //         <div className="footer-links">
        //             {
        //                     footerMenuItems.map((footerMenuItem, index) => (
        //                         <div key={index} className="footer-column">
        //                             <h4>{footerMenuItem.name}</h4>
        //                             <ul>
        //                                 {
        //                                     footerMenuItem.children.map((child,childIndex) => (
        //                                         <li key={childIndex}>{child}</li>
        //                                     ))
        //                                 }
                                        
        //                             </ul>
        //                         </div>
        //                     ))
        //             }
        //         </div>
        //         <div className="social-links">
        //             <a href="#fb"><img src={facebook}/></a>
        //             <a href="#fb"><img src={twitter}/></a>
        //             <a href="#fb"><img src={pinterest}/></a>
        //             <a href="#fb"><img src={instagram}/></a>
        //         </div>
        // </div>
            
        // </footer>
    )
}