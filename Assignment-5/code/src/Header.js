import InstagramIcon from '@mui/icons-material/Instagram';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
const Header = ({ config }) => {
    return (
    <div className="Header">
        <div className="Header1">
           <div className="insta-icon"><InstagramIcon/></div>
            <div><h1 className='ins'>Instaclone</h1></div>
            
        </div>
        <div className="Camera-icon"><PhotoCameraIcon/></div>
        
    </div>
    );
};
export default Header;