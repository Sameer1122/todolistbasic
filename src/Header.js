import Button from './Button.js'
import PropTypes from 'prop-types';


const Header = ({title, onAddTask, changeButton}) => {

  return (
    
    <header className="header">
    <h1>{title}</h1>
    <Button color = {changeButton ? 'Red':'green'} text = {changeButton ? 'Close':'Add'} onClick = {onAddTask} />
    
    </header>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
