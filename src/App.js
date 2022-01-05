import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.componenet';


function App() {
//  const [news,setNews]= useState([])

//  useEffect(()=>{
//    const getArticles = async ()=>{
//      const response= await fetch('https://newsapi.org/v2/top-headlines?country=eg&apiKey=86c67467a1b04994a9348d33718410ea')
//      const data = await response.json()
//      setNews(data.articles);
//    }

//    getArticles();
  
  
//  },[])
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
