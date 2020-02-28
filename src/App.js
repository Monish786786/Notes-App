import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import UserList from './UserList'

import Posts from './Posts' 
import userPost from './userPost'
function App(props){
   

    return(
        <BrowserRouter>
        <div>
           
            <Link to="/">Home</Link>{/* to= will go to the link part as it is a path*/ }
            <Link to="/users">Users List</Link>
            <Link to="/post">Post</Link>
            <Link to="/posts">Posts</Link>
           
          <Route path="/" component={Home} exact={true}/>{/*the path over here will be same as to exact is used bcoz the link are same so will always prefer to home page also */}
         
          <Route path="/users" component={UserList}/>
         
          <Route path="/post" component={Posts}/>
          <Route path="/posts" component={userPost}/>
        </div>
        </BrowserRouter>
    )
}

export default App