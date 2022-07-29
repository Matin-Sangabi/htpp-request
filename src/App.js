import { Routes , Route , } from "react-router-dom";
import AddComment from "./pages/AddCommentPage";
import Comments from "./pages/CommentPage";
import HomePage from "./pages/HomePage";
const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/comments/:id" element={<Comments/>}/>
            <Route path="/comments" element={<Comments/>}/>
            <Route path="/add-comments" element={<AddComment/>}/>
        </Routes>
     );
}
 
export default App;