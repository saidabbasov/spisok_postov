import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostItem from './components/PostItem/PostItem';
import PostForm from './components/UI/PostForm/PostForm';
import MySelect from './components/UI/Select/MySelect';

const App = () => {

  const [posts, setPosts] = useState([
    {id:1, title:'Javascript', body:'4'},
    {id:2, title:'ReactJS', body:'2, world!'},
    {id:3, title:'TypeScript', body:'3'},
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return(
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin:'15px'}} />
      <div>
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          {value:'title', name:"По названию"},
          {value:'body', name:"По описанию"},
        ]}
        />
      </div>
      {posts.length !== 0 
      ? <div><h1 style={{textAlign:'center'}}>Список постов </h1>
      { posts.map((post, index) => <PostItem remove={removePost} number = {index + 1} post={post} key={post.id}/>)}</div>
      :<h1 style={{textAlign:'center'}}> Посты не были найдены!</h1>
      }
      
    </div>
  )
}

export default App;
