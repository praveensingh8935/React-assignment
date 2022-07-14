
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
const PostFooter = ({ config }) => {
    const postedOnDate = new Date(config.date),
    postedOn = `${postedOnDate.getDate()} ${MonthNames[postedOnDate.getMonth()]} ${postedOnDate.getFullYear()}`;
    return (
    <div className="PostFooter">
        <div className="icon">
        <button className='Heart'><FavoriteBorderIcon/></button>
        <button className='Send'><SendIcon/></button>
        </div>
        <div className="Date">{postedOn}</div>
        <div className="Likes">{config.likes} Likes</div>
        <div className="Description">{config.description}</div>
    </div>
    );
};
 const MonthNames =["Jan","Fed","Mar","Apr","May","Jun","Jul","Aug","Seb","oct","Nov","dec"]
export default PostFooter;