const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />

          <button className="btn btn-primary">
            Login
          </button>

          <button className="btn btn-outline">
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;