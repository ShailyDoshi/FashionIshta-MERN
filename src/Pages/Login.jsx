const Login = () => {
  return (
    <section className="max_padd_container flexBetween flexCenter flex-col pt-32">
      <div className="max-x-[555px] h-[600px] bg-white m-auto mb-10 px-14 py-10 rounded-md">
        <h3 className="h3">Sign Up</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input
            type="text"
            placeholder="Your Name"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            npmmru
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button className="btn_dark_rounded my-5 w-full !rounded-md">
          Continue
        </button>
        <p className="text-black font-bold">
          Alredy Have an account?{" "}
          <span className="text-secondary underline cursor-pointer">Login</span>
        </p>
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and use & Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
