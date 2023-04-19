import Login from './Login'
import ApiTest from '../Test/ApiTest'

// localhost:3000

export default function GoogleLogin() {
  return (
    <div style={{width: "500px", margin: "0 auto", paddingTop: "30px"}}>
      <h3>Login Website</h3>
      <Login />
      <ApiTest/>
    </div>
  )
}
