// Write your JS code here
/* Write your CSS code here */
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logoutUser = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={logoutUser}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
