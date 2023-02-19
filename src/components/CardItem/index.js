// Write your code here.
import './index.css'

const cardItem = props => {
  const {g, key} = props
  const {title, description, imgUrl, className} = g
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}
