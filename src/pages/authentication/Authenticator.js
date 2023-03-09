import { RightArrow } from '../../assets/icons/arrows'
// styling
import "./auth.css"
const Authenticator = () => {
  return (
    <>
        <div className='Authenticator'>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <input
                type="text"
                placeholder="OTP"
                name="OTP"
            />
            <div>         
                <button className='auth-btn'>Login <RightArrow/></button>
            </div>
        </div>
    </>
  )
}

export default Authenticator