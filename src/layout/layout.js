import Sidebar from "../components/sidebar/sidebar";

const Layout = ({children}) => {
    return ( 
        <main className="container">
            <Sidebar/>
            <div className="row">
                {children}
            </div>
        </main>
     );
}
 
export default Layout;