import { useState } from "react";
// styling
import "./auth.css" 
// icons
import { HiddenPasswordIcon, ShowPasswordIcon } from "../../assets/icons/hide-password";
import { RightArrow } from "../../assets/icons/arrows";
import Spinner from "../../assets/icons/spinner";


const Auth = () => {
    const [formData, setFormData] = useState({
        email:"", password : ""
    })

    const handleChange = (e)=>{
        setFormData((prevFormData)=>{
            return{
                ...prevFormData,
                [e.target.name] : e.target.value
            }  
        })
    }

       const handleSubmit = (e) =>{
        e.preventDefault();
        window.location = "/authenticate"
       }

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
            <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                />
            </div>
        <div>
            <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
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
                <Spinner/>
            <button className="auth-btn">
                Authentication <RightArrow/>
            </button>
            </form>
        </div>
    </>
  )
}

export default Auth