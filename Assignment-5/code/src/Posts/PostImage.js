const PostImage = ({ config }) => {
    const relativeImageUrl = `./image/${config.PostImage}`;
    return (
    <div className="PostImage">
        <img className="Image" src={relativeImageUrl} alt="imag"/>
    </div>);
};
export default PostImage;
