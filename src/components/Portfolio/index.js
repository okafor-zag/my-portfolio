import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
import portfolioData from "../../data/portfolio.json"

import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData);

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      const renderPortfolio = (portfolio) => {
        return(
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return(
                            <div className="image-box" key={idx}>
                                <LazyLoadImage src={ process.env.PUBLIC_URL + port.cover} className="portfolio-image" alt="portfolio" />
                                <div className="content">
                                    <p className="title">
                                        {port.title}
                                    </p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                            
                        )
                    })
                }

            </div>
        )
      }



    return (<>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                letterClass={letterClass}
                strArray={'Portfolio'.split("")}
                idx={15}
                />
            </h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Portfolio;