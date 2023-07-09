// Write your JS code here
import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwt = Cookies.get('isUserLogged')
  if (jwt === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
