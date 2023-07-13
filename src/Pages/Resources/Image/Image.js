import React, { useState } from 'react'
import './Image.css'
import bgext from '../../../Assets/image-ext.png'
import pixCluster from '../../../Assets/pixel-cluster.png'
import starCluster from '../../../Assets/star-cluster.png'
import { postImage } from '../../../API'
import BeforeAfter from '../../../Components/BeforeAfter/BeforeAfter'
const Image = () => {
    const [image, setImage] = useState({ preview: '', data: '',result:null })
    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }
    const [bg, setBg] = useState(null)
     const [color, setColor] = useState(null)
    const [cluster, setCluster] = useState(null)
    return (
        <div className='image'>
            <div className="gallery_banner">
                <img src='https://viewspace.org/assets/banners/museum-resources-banner-aabc4d8b7d1a16fec3e4725a64c9879f758ab647286fab0b2cde598280d52113.jpg' alt="Gallery Banner" />
                <h1 align="center">Image Processing in Astronomy</h1>
            </div>
            <div className='container'>
                <div className='image-info'>
                    <h2>Using Image Processing in Astronomy</h2>
                    <p>Image processing plays a crucial role in astronomy, as it enables us to analyze and extract meaningful information from astronomical images captured by telescopes and other instruments. With the help of advanced image processing techniques, astronomers can enhance the quality of the images, detect faint and distant objects, and study the properties of celestial objects in greater detail.</p>
                    <div><img src='https://www.allaboutastro.com/uploads/1/2/4/7/12477060/m8multipleprocessing_orig.jpg' />
                    </div>
                </div>
                <div className='image-feature'>
                    <h2>Background Removal</h2>
                    <h4>Remove background from space image and analyze minute details.</h4>
                    <div className='image-flex'>

                        <div>
                            <img src={bgext} />

                        </div>
                        <div>

                            <p>This filter can be used on a variety of images to subtract the background and enhance the signal of interest. In astronomy, this filter is often used on images of diffuse objects such as galaxies, nebulae, and star clusters, where the signal is spread out over a large area and the background can vary significantly across the image. By subtracting the background, it is possible to enhance the contrast and bring out details that might be otherwise difficult to see.</p>
                            <h3>Try on another image!</h3>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                postImage(image, `${process.env.REACT_APP_BACKEND_URL}/BackgroundRemover`,setBg)
                            }}>
                                    <input type='file' name='file' onChange={handleFileChange} required={true}/>
                                    <button className="btn" type='submit'>Upload Image</button>
                            </form>
                        </div>
                    </div>
                    {bg&&bg.result&&<BeforeAfter before={bg.preview} after={bg.result} id='bg-remove'/>}
                </div>
                <div className='image-feature'>
                    <h2>Pixel Clustering</h2>
                    <h4>Clustering of image based on pixel values</h4>
                    <div className='image-flex'>

                        <div>
                            <img src={pixCluster} />

                        </div>
                        <div>
                            <p>The code applies clustering algorithm to group pixels of an input image into clusters based on their pixel values. This can be useful for various applications in astronomical image processing, such as:</p>
                            <ol>
                                <li>

                                    Identifying and separating objects in an image based on their pixel values, such as identifying different types of stars or galaxies in an image.
                                </li>
                                <li>


                                    Studying the characteristics of objects in an image by analyzing their pixel values within a cluster, such as analyzing the color or intensity variations within a star cluster.
                                </li>
                                <li>



                                    Enhancing the contrast or brightness of certain features in an image by selectively adjusting the pixel values of specific clusters.
                                </li>
                            </ol>

                            <h3>Try on another image!</h3>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                postImage(image, `${process.env.REACT_APP_BACKEND_URL}/ClusterOfColors`,setColor)
                            }}>
                                <input type='file' name='file' onChange={handleFileChange}></input>
                                <button type='submit'>Upload Image</button>
                            </form>
                        </div>
                    </div>
                    {color&&<img src={color.result} id='bg-remove'/>}
                </div>
                <div className='image-feature'>
                    <h2>Star Cluster Identification</h2>
                    <h4>Find star clusters in an image</h4>
                    <div className='image-flex'>

                        <div>
                            <img src={starCluster} />

                        </div>
                        <div>

                            <p>Image processing techniques such as Gaussian blur, thresholding, and contour detection are applied to identify star clusters in an astronomical image. The output displays the original image with circles drawn around the detected star clusters. This code can be used for research in astronomy to automatically identify and analyze star clusters in astronomical images.</p>                            <h3>Try on another image!</h3>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                postImage(image, `${process.env.REACT_APP_BACKEND_URL}/ClusterFromImage`,setCluster)
                            }}>
                                <input type='file' name='file' onChange={handleFileChange}></input>
                                <button type='submit'>Upload Image</button>
                            </form>
                        </div>
                    </div>
                    {cluster&&cluster.result&&<BeforeAfter before={cluster.preview} after={cluster.result} id='bg-remove'/>}

                </div>
            </div>
        </div>
    )
}

export default Image        