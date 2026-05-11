const Register = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Register
          </h1>

          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />

          <button className="btn btn-primary">
            Register
          </button>

          <button className="btn btn-outline">
            Google Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
