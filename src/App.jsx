import { useState } from "react";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkList from "./components/LinkList";
import './App.css'

export default function App(){
    const [links, setLinks] = useState([]);
    
    const handleLinkCreated = (newLink) => {
        setLinks((prevLinks) => [newLink, ...prevLinks]);
    };

    return(
        <>
            <Header/>
            <Hero onLinkCreated={handleLinkCreated}/>
            <main>
                <LinkList links={links}/>
            </main>
            
            <Newsletter/>
            <Footer/>
        </>

    )
}