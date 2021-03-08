import henryLogo from "../../logo_henry3.png";
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className="Home">
            <img className="Img" src={henryLogo} alt="Logo"/>
            <h1 className="Titulo"><Link to="/login"><b>Henry App Manager</b></Link></h1>
        </div>
    )
}