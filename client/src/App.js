import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageContent from './components/PageContent';
import {useDispatch} from 'react-redux'
import {FetchPosts} from './thunk_actions/Posts.js'

function App() {
  
  const [chosenPost,setChosenPost] = useState(null)
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(FetchPosts())

  },[dispatch])



  return (
  <div className='background'>
    <div className="container">
      <Header/>
      <PageContent setChosenPost={setChosenPost} chosenPost={chosenPost}/>
      
    </div>
  </div>

  );
}

export default App;
