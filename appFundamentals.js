// Cool stuff here!
// 1. Using array map to render lists
// 2. Using conditionals in JSX to render div on/off

const App = () => {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
    { id: 4, text: 'Comment four' },
    { id: 5, text: 'Comment five' },
  ]

  const loading = false;
  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))
        }
      </ul>
    </div>
  )

  if (loading) return <h1>Loading...</h1>

  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <h2>{body}</h2>
      <h2>Hello from the app component</h2>
      <p>You are going to be a great React Developer!</p>

      {showComments && commentBlock}
    </div>
  )
}

export default App;