import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:h-1/3 text-center bg-gray-300 mt-4 ml-6">
            <div>
                <h3> Reading Time:{readingTime}</h3>
            </div>
            <h2>Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark  key ={bookmark.id}bookmark ={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;