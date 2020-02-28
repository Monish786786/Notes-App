import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            post:[]
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const post=response.data
            this.setState({post})
        })
        .catch(err=>{
            alert(err)
        })
    }

    render(){
        return(
            <div>
                <h2>Listing Posts-{this.state.post.length}</h2>

                <ul>
                    {this.state.post.map(user=>{
                        return <li key={user.id}><Link to={`/posts/${user.id}`}>{user.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Posts