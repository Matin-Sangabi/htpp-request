import Layout from "../layout/layout";
import {useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import FullComments from "../components/FullComment/FullComments";
const Comments = () => {
 const {id} = useParams();
 const [selectId , setSelectId] = useState(null);
 useEffect(() => {
    setSelectId(id);
 } , [id]);
    return ( 
        <Layout>
            <FullComments setSelectId={setSelectId} selectId={selectId}/>
        </Layout>
     );
}
 
export default Comments;