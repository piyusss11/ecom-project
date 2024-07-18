import Link from "next/link";


const Register = () => {
  
    return (
      <div className=" flex justify-center font-inter  ">
        <div className="border-gray-200 rounded-lg border-2 my-10 w-1/3 py-10 px-16 ">
          <div className=" text-[32px] leading-[38px] font-semibold text-center">
            Create your account
          </div>
        
          <div className="my-6">
            <h1>Name</h1>
            <input
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="text"
              placeholder="Enter"
            />
          </div>
          <div className="my-6">
            <h1>Email</h1>
            <input
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="email"
              placeholder="Enter"
            />
          </div>
          <div className="my-6">
            <h1>Password</h1>
            <input
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              type="password"
              placeholder="Enter"
            />
          </div>
          <button className="my-6 w-full bg-black text-white font-[500] rounded-lg text-sm p-2 ">
            CREATE ACCOUNT
          </button>
          <div className="text-base text-center flex gap-4 justify-center items-center">Have an Account? 
            <Link href={"/Login"}>
            <span className="font-[500]">LOGIN</span>
            </Link>


            </div>
        </div>
      </div>
    );
  };
  
  export default Register;
Register  