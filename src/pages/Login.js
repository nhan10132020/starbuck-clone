import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { AiFillCloseCircle } from "react-icons/ai";
import {
  MdReportProblem,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import FormSubmit from "../components/FormSubmit";
import FooterSecondary from "../components/FooterSecondary";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const Login = () => {
  const [loadingOnCheck,setLoadingOnCheck] = useState(false)
  const [errMess,setErrMess] = useState("")
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [passwordShown, setpasswordShown] = useState(false);
  const onSubmit = ({ email, password }) => {
    setLoadingOnCheck(true)
    setErrMess("")
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLoadingOnCheck(false)
      })
      .catch((error) => {
        setLoadingOnCheck(false)
        setErrMess(error.message)
      });
  };

  return (
    <div className="flex sm:flex-col">
      <div className="fixed top-0 bottom-0 left-0 overflow-hidden w-[40vw] flex flex-col h-[100vh] shadow-loginl-shadow sm:relative sm:w-[100%] sm:h-[150px] sm:gap-[10px]">
        <Link
          to="/"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
            className="object-contain h-[50px] mt-[30px] ml-[40px]"
          />
        </Link>
        <div className="w-full h-full grid place-items-center text-4xl  text-[rgba(0,0,0,0.87)] md:text-2xl  sm:pl-[40px] sm:inline sm:text-start sx:text-base text-center">
          <h1 className="font-[800] ">Sign in or create an account🌟</h1>
        </div>
      </div>
      <div className="overflow-scroll grid ml-[40vw] flex-[1] place-items-center bg-[#f7f7f7] py-[20px] sm:ml-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-w-[300px] min-h-[420px] flex flex-col gap-[20px]  pt-[60px] pb-[40px]"
        >
          <div className="relative">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  label="Email Adress"
                  type="email"
                  InputLabelProps={{
                    style: {
                      color: "rgba(0,0,0,0.56)",
                    },
                  }}
                  InputProps={{
                    style: {
                      fontWeight: "800",
                    },
                  }}
                  className="w-full"
                />
              )}
            />
            {errors.email && (
              <div className="mt-[5px] flex items-center gap-[5px] text-[10px]">
                <AiFillCloseCircle fontSize="medium" color="#e75b52" />
                <span>Enter an email.</span>
                <MdReportProblem
                  fontSize="large"
                  color="#e75b52"
                  className="absolute right-0 top-0 translate-y-full"
                />
              </div>
            )}
          </div>

          <div className="relative">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  label="Password"
                  type={passwordShown ? "text" : "password"}
                  InputLabelProps={{
                    style: {
                      color: "rgba(0,0,0,0.56)",
                    },
                  }}
                  InputProps={{
                    style: {
                      fontWeight: "800",
                    },
                  }}
                  className="w-full"
                />
              )}
            />
            {passwordShown ? (
              <MdOutlineVisibility
                onClick={() => setpasswordShown(!passwordShown)}
                fontSize="larger"
                className="cursor-pointer text-[rgba(0,0,0,0.56)] absolute right-[10%] top-0 translate-y-full"
              />
            ) : (
              <MdOutlineVisibilityOff
                onClick={() => setpasswordShown(!passwordShown)}
                fontSize="larger"
                className="cursor-pointer text-[rgba(0,0,0,0.56)] absolute right-[10%] top-0 translate-y-full"
              />
            )}
            {errors.password && (
              <div className="mt-[5px] flex items-center gap-[5px] text-[10px]">
                <AiFillCloseCircle fontSize="medium" color="#e75b52" />
                <span>Enter an password.</span>
                <MdReportProblem
                  fontSize="large"
                  className="absolute right-0 top-0 translate-y-full"
                  color="#e75b52"
                />
              </div>
            )}
          </div>
          <div className="mt-[20px]">
            <Link className="block mt-[15px] text-[#00653e] underline font-[600] text-[15px] hover:no-underline">
              Forgot your username?
            </Link>
            <Link className="block mt-[15px] text-[#00653e] underline font-[600] text-[15px] hover:no-underline">
              Forgot your password?
            </Link>
          </div>
          {loadingOnCheck?<CircularProgress size={"20px"}/>:<p className={`text-[10px] text-[#e75b52] ${errMess?"block":"hidden"}`}>{errMess}</p>}
          <FormSubmit name="Sign in" type="submit" isloading={loadingOnCheck}/>
        </form>

        <div className="text-center w-full py-[20px] bg-[#2d2926] text-white">
          <h4 className="text-[14px] font-[800] leading-[1.4px]">
            JOIN STARBUCKS® REWARDS
          </h4>
        </div>
        <div className="bg-[#edebe9] w-full py-[30px]">
          <div className="max-w-[300px] mx-auto flex flex-col gap-[20px]">
            <Link
              to="/account/create"
              className="inline-block border-[1px] rounded-[50px] border-black py-[7px] px-[16px] font-[600] leading-[1.2] text-center transition-all duration-200 text-[rgba(0,0,0,0.87)] mr-auto hover:bg-[rgba(0,0,0,0.06)]"
            >
              Join now
            </Link>
            <h4 className="text-[20px] font-[600] text-[rgba(0,0,0,0.87)]">
              Create an account and bring on the Rewards!
            </h4>
            <p className="text-[14px] font-[600] leading-[1.6]">
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection="column" />
      </div>
    </div>
  );
};

export default Login;
