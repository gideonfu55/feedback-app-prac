import { Route, Routes, useParams } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom"

const Post = () => {
  const params = useParams()

  const navigate = useNavigate()

  const onClick = () => {
    navigate('/about')
  }

  const status = 101

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1 style={{marginTop: 10}}>Hello World!</h1>}/>
      </Routes>
    </div>
  )
}

export default Post