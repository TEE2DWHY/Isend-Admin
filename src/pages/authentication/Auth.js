import "./auth.css" 

const Auth = () => {
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
                />
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