import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class userPost extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            users:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get('http://jsonplaceholder.typicode.com/users/${id}')
        .then(response=>{
          const users=response.datathis.setState({users})
            
        })
        .catch(err=>{
            alert(err)
        })
    
    
        axios.get('http://jsonplaceholder.typicode.com/posts?userid')
        .then(response=>{
            const all_post=response.data
            const posts=all_post.filter(post=>{
                return post.userId==id
            })
        })
        .catch(err=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h2>Selected Users-{this.state.users.name}</h2>
                <h4>Posts written by user:{this.state.posts.length}</h4>
                <ul>
                    {
                        this.state.posts.map(post=>{
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}></Link></li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default userPost