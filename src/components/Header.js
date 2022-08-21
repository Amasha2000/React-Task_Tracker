import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

const headingStyle={
  color:'red',
  backgroundColor:'black'
}

Header.defaultProps={
  title:'Task Tracker'
}

Header.propTypes={
  title:PropTypes.string.isRequired
}


export default Header