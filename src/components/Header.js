import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

  const onClick=()=>{
    
  }


  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
      {/* <Button color='blue' text='Hello2'/>
      <Button color='red' text='Hello3'/> */}
    </header>
  )
}

// const headingStyle={
//   color:'red',
//   backgroundColor:'black'
// }

Header.defaultProps={
  title:'Task Tracker'
}

Header.propTypes={
  title:PropTypes.string.isRequired
}


export default Header