const Login = async () => {
    return (
        <>
            <main className="framer">
                <h1>Login to Small Blogger</h1>
                <p>Create contents for your audience</p>
                <form>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="emai"
                        id="email"
                        className="input input-border-faint"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        className="input input-border-faint"
                    />
                    <button 
                        type="submit"
                        aria-disabled={false}
                        aria-description="submit"
                        className="btn btn-submit btn-primary"
                    >Login</button>
                </form>
            </main>
        </>
    )
}

export default Login