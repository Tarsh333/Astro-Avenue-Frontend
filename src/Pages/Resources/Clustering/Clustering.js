import React from 'react'
import './Clustering.css'
import Card from '../../../Components/ClusteringCard/Card'
import data from './ClusteringData'
import { renderGraph } from '../../../API'
import AsteroidBelt from './AsteroidBelt'
const Clustering = () => {
    return (
        <div className='clustering'>
            <div className="gallery_banner">
                <img src='https://viewspace.org/assets/banners/museum-resources-banner-aabc4d8b7d1a16fec3e4725a64c9879f758ab647286fab0b2cde598280d52113.jpg' alt="Gallery Banner" />
                <h1 align="center">Data Clustering in Astronomy</h1>
            </div>
            <div className='container'>
                <div className='clustering-info'>
                    <h2>Using Data Clusering in Astronomy</h2>
                    
                    <p>Data clustering is a powerful technique in astronomy that is used to group together objects based on their properties. Here are some examples of how clustering is used in astronomy:
                        <ol>
                            <li>
                                Star Clustering: Astronomers use clustering techniques to group stars that have similar properties, such as age, mass, and temperature. This allows them to study how stars evolve over time, and to understand the processes that lead to the formation of different types of stars.
                            </li>
                            <li>
                                Galaxy Clustering: Clustering is also used to study the large-scale structure of the universe. Astronomers use clustering algorithms to group together galaxies that are close to each other in space, in order to understand how they are distributed throughout the universe.
                            </li>
                            <li>
                                Supernova Clustering: Clustering is used to study supernovae, which are massive explosions that occur when a star reaches the end of its life. By clustering together supernovae that have similar properties, astronomers can gain insights into the processes that lead to these explosions, and how they affect the evolution of galaxies.
                            </li>
                        </ol>
                    </p>
                    <div>
                    </div>
                </div>
                <div className='cards'>
                <AsteroidBelt link={data[0].link} text={data[0].text} title={data[0].title} image={data[0].image}/>
                <h1>Grouping celestial bodies to predict galaxies/studying effect of different clustering algorithms on different type of dataset.</h1>
                {data.map((d,i) => {
                    if(i==0)return<></>
                    return (<Card text={d.text} title={d.title} image={d.image} link1={()=>{renderGraph(d.link1)}} link2={()=>{renderGraph(d.link2)}} link3={()=>{renderGraph(d.link3)}} />)
                })}
                </div>
            </div>
        </div >
    )
}

export default Clustering