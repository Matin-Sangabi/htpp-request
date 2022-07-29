import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../components/Comment/Commnets";
import Layout from "../layout/layout";

const HomePage = () => {
    const [comment , setComment] = useState([]);
    useEffect(()=>{
        const getComments = async () =>{
            try{
                const response = await axios.get('http://localhost:3001/comments');
                setComment(response.data);
            }
            catch(err) {
                console.log(err)
            }
        }
        getComments();
    } , [])
    return (
        <Layout>
            <Comments comments={comment}/>
        </Layout>
     );
}
 
export default HomePage;