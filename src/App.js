import './App.css'
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";


  function App() {

     return (
         <div>
             <Posts>
             <Post items={post}/>
             </Posts>
         </div>
     );
 }
 export default App;


