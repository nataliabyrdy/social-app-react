import axios from "axios";
import { useEffect, useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([])

    const getLatestPosts = () => {
        axios.post('https://akademia108.pl/api/social-app/post/latest').then((req) => {
            console.log(req);
        })
    }

    useEffect(()=>{
        getLatestPosts();
    }, [])

    return <h3>Home</h3>
}

export default Home;