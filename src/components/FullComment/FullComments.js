import { useEffect, useState } from "react";
import { Link , useNavigate  } from "react-router-dom";
import axios from "axios";
import "./fullcomment.css";
const FullComments = ({ selectId , setSelectId }) => {
  const [comment, setComment] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectId) {
      axios
        .get(`http://localhost:3001/comments/${selectId}`)
        .then((res) => setComment(res.data))
        .catch((err) => console.log(err));
    }
  }, [selectId]);

  const removeComment = async (id) =>{
    try{
        await axios.delete(`http://localhost:3001/comments/${id}`);
        setComment(null);
        setSelectId(null);
        navigate("/");
    }
    catch(err){
        console.log(err)
    }
  }


  let commentDetail = (
    <div className="return">
      <h1>Opps ! please select the One Comment</h1>
      <Link to={"/"}>Go To Home page</Link>
    </div>
  );
  if (selectId) commentDetail = <p className="loader-1"></p>;
  //   if(!selectId && comment.length ===0) commentDetail = <p>Opps ! please select the One Comment</p>
  if (comment) {
    commentDetail = (
      <div className="fullComment-content">
        <h1>Comment Detail :</h1>
        <div className="content-container">
          <h1>name : {comment.name}</h1>
          <h3>email : {comment.email}</h3>
          <h4>body : {comment.body}</h4>
        </div>
        <button type="button" className="full-comment-btn" onClick={()=> removeComment(comment.id)}>Delete This Comment</button>
      </div>
    );
  }
  return <section className="full-comment">{commentDetail}</section>;
};

export default FullComments;
