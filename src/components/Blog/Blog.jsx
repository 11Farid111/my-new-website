import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa6';
const Blog = ({blog , handleAddToMark , handleMarkAsRead}) => {
    const {title, cover,author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-7'>
            <img className='m-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-12'>
            <div className='flex'>
            <img className='w-14' src={author_img} alt="" />
            <div className='ml-2'>
                <h3>{author}</h3>
                <p>{posted_date}</p>
            </div>
            </div>
            <div>
            <p><span>{reading_time}min read</span> <button onClick={() =>handleAddToMark(blog)}><FaBookmark></FaBookmark></button></p>
            
            </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p>
                    {
                        hashtags.map((hash, idx)=><span key={idx}><a href=""> #{hash}</a></span>)
                    }
                </p>
                <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
            </div>
        </div>
    );
    
};
 Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
 }
export default Blog;