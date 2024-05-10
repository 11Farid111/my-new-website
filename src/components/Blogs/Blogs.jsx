import { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({handleAddToMark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h2>Blogs:{blogs.length}</h2>
            {
                blogs.map(blog =>
                <Blog handleAddToMark ={handleAddToMark} 
                handleMarkAsRead={handleMarkAsRead}
                key={blog.id} 
                 blog={blog}>
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;