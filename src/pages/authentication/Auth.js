import "./auth.css" 
// icons
import { HiddenPasswordIcon, ShowPasswordIcon } from "../../assets/icons/hide-password"

const Auth = () => {
    const passwordVisibility =() =>{
        var showPassword = document.getElementById("password");
        if (showPassword.type === "text") {
            showPassword.type = "password"
            document.querySelector(".hide-password").classList.toggle("eye-hidden")
            document.querySelector(".show-password").classList.toggle("eye-visible")
        }
        else {
        showPassword.type = "text"
        document.querySelector(".hide-password").classList.toggle("eye-hidden")
        document.querySelector(".show-password").classList.toggle("eye-visible")
        }
    }
  return (
    <>
        <div className='auth-container'>
            <h1>Welcome Back!!</h1>
            <form>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                />
            </div>
        <div>
            <input
                type="password"
                placeholder="Password"
                id="password"
                />
                <span
                className="hide-password"
                onClick={passwordVisibility}>
                <HiddenPasswordIcon
                />
                </span>
                <span
                className="show-password"
                onClick={passwordVisibility}>
                <ShowPasswordIcon/>
                </span>
        </div>
            <button className="auth-btn">
                Authentication <i className="fa-solid fa-arrow-right arrow-btn"></i>
            </button>
            </form>
        </div>
    </>
  )
}

export default Auth