import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-lg">
            <h2>{title}</h2>
        </div>
    );
};
 Bookmark.propTypes = {
    bookmark:PropTypes.func
 }
export default Bookmark;