import "./comments.css";
import {Link} from 'react-router-dom';
const Comments = ({comments}) => {
    return ( 
        <section className="comments">
            {comments.length ? (comments.map((com)=>(
                <Link to={`/comments/${com.id}`} key={com.id} className="comment-content">
                    <h4>{com.name}</h4>
                    <h5>{com.email}</h5>
                </Link>
            ))) : (<span className="loader"></span>)}
        </section>
     );
}
 
export default Comments;