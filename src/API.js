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

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/index`)
    const data = await res.json()
    // console.log(data)        
    let result=[]
    Object.keys(data).forEach(function(key, index) {
        result.push(data[key])
      });
    setCalendar(result)
    
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
const postImage = async (image,url,setFxn) => {
    let formData = new FormData()
    let data=new FormData()
    formData.append('file', image.data)
    data.append('file', image.data)
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dtdehangx");
    fetch("https://api.cloudinary.com/v1_1/dtdehangx/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: localStorage.getItem("auth-token"),
      },
    })
    const res=await response.json()
    console.log(res);
    setFxn((prev)=>{
        !prev&&window.scrollBy(0, 400);
        // console.log(prev);
        return ({preview:image.preview,result:`${process.env.REACT_APP_BACKEND_URL}/${res.resultPath}`})
    })
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/image/${res.resultPath}`);
    // if (response) setStatus(response.statusText)
  }

const renderGraph=async(url)=>{
    window.open(`${process.env.REACT_APP_BACKEND_URL}${url}`)
    
}
export { getimod, search, getNews, getCalendar,getstaticCalendar,postImage,renderGraph }