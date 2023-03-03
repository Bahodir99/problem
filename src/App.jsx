import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [post, setpost] = useState([])
  const [id, setId] = useState(0)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setpost(data))
    }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  
  post.map(({userId})=>{
    console.log(userId);
  })

  return (
    <div className="App">
      <ul>
        {
          data && data.map(({ id, name }) => (
            <li key={id}>
              <h3>{name}</h3>

              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                modal
              </button>
            </li>
          ))
        }
      </ul>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                  {
                     post && post.map(({id,userId,title})=>(
                      <li>{userId === id ? id +' title -'+ title: ''}</li>
                    ))
                  } 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <h1>app</h1>
    </div>
  );
}

export default App;
