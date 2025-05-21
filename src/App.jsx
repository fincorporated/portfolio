import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fin from './fin.png'
import './App.css'
import Icon from '@mdi/react';
import { mdiArrowCollapseDown } from '@mdi/js';
import { mdiArrowCollapseUp } from '@mdi/js';
import { pages } from './data'

function App() {
  const items = pages.map(page => 
    <li key={page.id}><ExpandPage title={page.title} content={page.content} /></li>
  );
  return (
    <>
      <h1>Fincorporated</h1>
      <div className="card">
        <ul>{items}</ul>
      </div>
    </>
  )

}

function Page({
  content
}) {
  return (
    <div className='page'>
      <p>{content}</p>
    </div>
  )
}

function ExpandPage({
  title,
  content
}) {
  const [expand, setExpand] = useState(false);

  function handleExpandClick() {
    setExpand(!expand)
  }
  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleExpandClick} >
        {expand ?<Icon size={1} path={mdiArrowCollapseUp} /> : <Icon size={1} path={mdiArrowCollapseDown} /> }
      </button>  
      <p>{expand ? <Page content={content} /> : '' }</p>
      
    </>
  )
}



export default App
