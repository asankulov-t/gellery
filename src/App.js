import React,{useState, useEffect} from 'react';
import ImgCards from "./components/ImgCards";
import ImgSearch from "./components/ImgSearch";

function App() {
    const [images, setImages]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [term,setTerm]=useState('');

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(res=>res.json())
            .then(data=>{setImages(data.hits); setIsLoading(false)})
            .catch(err=>console.log(err))
    },[term])

  return (
      <div className={'container mx-auto'}>
          <ImgSearch searchText={(text)=>setTerm(text)}/>
          {isLoading?<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>:
                 <div className="grid grid-cols-3 gap-4">

                     {images.map(image=>(
                         <ImgCards key={image.id} image={image.webformatURL} user={image.user} likes={image.likes}
                                   downloads={image.downloads} views={image.views} tags={image.tags}
                         />
                     ))}
                 </div>
          }
      </div>
  );
}

export default App;
