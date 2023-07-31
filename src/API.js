import jsonData from './calendar.json';

const API_KEY = process.env.REACT_APP_API_KEY
const getimod = async (date,setimod) => {
    setimod(null)
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
    const data = await res.json()
    setimod(data)
}
const search = async (query, setImages) => {
    const res = await fetch(`https://images-api.nasa.gov/search?q=${query}`)
    const data = await res.json()
    const images = [];
    data.collection.items.forEach(img => {
        if (img.links) {
            images.push(img.links[0].href)
        }
    });
    let imgs = []
    imgs = images.slice(1, 11)
    setImages(imgs)
}
const getNews = async (setNews) => {
    const res = await fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
    const data = await res.json()
    data.pop()
    setNews(data)
}
const getCalendar = async (setCalendar) => {

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/index`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("auth-token"),
      }
    })
    const data = await res.json()
    console.log(data.result)        
    
}
const getstaticCalendar = async (setstaticCalendar) => {
    
    const data = jsonData
    // console.log(data);
    let result=[]
    Object.keys(data).forEach(function(key, index) {
        result.push(data[key])
      });
    setstaticCalendar(result)
}
const postImage = async (image,url,setFxn,setLoading) => {
  setLoading(true)
    let data=new FormData()
    data.append('file', image.data)
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dtdehangx");
    // console.log(data)
    
    const upload= await fetch("https://api.cloudinary.com/v1_1/dtdehangx/image/upload", {
        method: "post",
        body: data,
      });
      const upload_json = await upload.json();
      //  console.log(upload_json.url)
        
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ // Stringify the JSON object
          url: upload_json.url,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem("auth-token"),
        },
      });
    const resp=await response.json()
    // console.log(resp);
    setFxn((prev)=>{
        !prev&&window.scrollBy(0, 400);
        // console.log(prev);
        return ({preview:image.preview,result:resp.resp})
    })
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/image/${res.resultPath}`);
    // if (response) setStatus(response.statusText)
    setLoading(false)
  }
const getImages=async(setImages)=>{
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/images`,{
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem("auth-token"),
    }
  })
    const data = await res.json()
    setImages(data)
    console.log(data);
}
const renderGraph=async(url)=>{
    window.open(`${process.env.REACT_APP_BACKEND_URL}${url}`)
    
}
export { getimod, search, getNews, getCalendar,getstaticCalendar,postImage,renderGraph,getImages }