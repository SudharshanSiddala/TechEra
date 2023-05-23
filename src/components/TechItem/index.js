import './index.css'
import {Link} from 'react-router-dom'

const TechItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <Link to={`/courses/${id}`} className="items">
      <li className="list-container">
        <img src={logoUrl} alt={name} className="img" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TechItem
