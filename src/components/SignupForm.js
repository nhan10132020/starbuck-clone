import React, { useState } from "react";
import { TextField } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { AiFillCloseCircle } from "react-icons/ai";
import {
  MdReportProblem,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import FormSubmit from "./FormSubmit";
import { auth } from "../firebase";
import {useUserProvider} from '../context/UserProvider';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignupForm = () => {
  const [loadingOnCheck,setLoadingOnCheck] = useState(false)
  const [errMess,setErrMess] = useState("")
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const {setUserInfo,setLoading} = useUserProvider()
  const [passwordShown, setPasswordShown] = useState(false);
  const onSubmit = ({ fName, lName, email, password }) => {
    setLoadingOnCheck(true)
    setErrMess("")
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoadingOnCheck(false)
        setLoading(true)
        updateProfile(auth.currentUser, {
          displayName: `${fName} ${lName}`
        })
        .then(()=>{
          setUserInfo({
            email:email,
            uid: userCredential.user.uid,
            displayName:userCredential.user.displayName
          })
          setLoading(false)
        })
        
      })
      .catch((error) => {
        // ...
        setLoadingOnCheck(false)
        setErrMess(error.message)
      });
  };

  return (
    <div className="shadow-form-shadow rounded-[12px] max-w-[500px] h-[700px] mb-[20px] sx:shadow-none sx:h-[650px]">
      <div className="p-[56px] sx:px-[20px]">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full relative">
          <h4 className="text-[rgba(0,0,0,0.87)] font-[700] text-[19px] mb-[8px] sx:text-[16px]">
            Personal Information
          </h4>
          <div className="relative mb-[8px]">
            <Controller
              name="fName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First name"
                  type="text"
                  InputLabelProps={{
                    style: { color: "rgba(0,0,0,.56)" },
                  }}
                  InputProps={{ style: { fontWeight: "800" } }}
                  className="w-[100%]"
                  variant="standard"
                />
              )}
            />
            {errors.fName && (
              <div className="mt-[5px] flex items-center gap-[5px] text-[10px] ">
                <AiFillCloseCircle fontSize="medium" color="#e75b52" />
                <span>Enter your first name.</span>
                <MdReportProblem
                  fontSize="large"
                  color="#e75b52"
                  className="absolute right-0 top-0 translate-y-full"
                />
              </div>
            )}
          </div>

          <div className="relative mb-[8px]">
            <Controller
              name="lName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last name"
                  type="text"
                  InputLabelProps={{
                    style: { color: "rgba(0,0,0,.56)" },
                  }}
                  InputProps={{ style: { fontWeight: "800" } }}
                  className="w-[100%]"
                  variant="standard"
                />
              )}
            />
            {errors.lName && (
              <div className="mt-[5px] flex items-center gap-[5px] text-[10px]">
                <AiFillCloseCircle fontSize="medium" color="#e75b52" />
                <span>Enter your last name.</span>
                <MdReportProblem
                  fontSize="large"
                  color="#e75b52"
                  className="absolute right-0 top-0 translate-y-full"
                />
              </div>
            )}
          </div>
          <h4 className="text-[rgba(0,0,0,0.87)] font-[700] text-[19px] mb-[8px] mt-[48px]">
            Account Security
          </h4>
          <div className="relative mb-[8px]">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  type="email"
                  InputLabelProps={{
                    style: { color: "rgba(0,0,0,.56)" },
                  }}
                  InputProps={{ style: { fontWeight: "800" } }}
                  className="w-[100%]"
                  variant="standard"
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

          <div className="relative mb-[8px]">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type={passwordShown ? "text" : "password"}
                  InputLabelProps={{
                    style: { color: "rgba(0,0,0,.56)" },
                  }}
                  InputProps={{ style: { fontWeight: "800" } }}
                  className="w-[100%]"
                  variant="standard"
                />
              )}
            />
            {passwordShown ? (
              <MdOutlineVisibility
                onClick={() => setPasswordShown(!passwordShown)}
                fontSize="larger"
                className="cursor-pointer text-[rgba(0,0,0,0.56)] absolute right-[10%] top-0 translate-y-full"
              />
            ) : (
              <MdOutlineVisibilityOff
                onClick={() => setPasswordShown(!passwordShown)}
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
                  color="#e75b52"
                  className="absolute right-0 top-0 translate-y-full"
                />
              </div>
            )}
          </div>
          <h4 className="text-[rgba(0,0,0,0.56)] text-[14px] my-[24px] font-[600] sx:text-[13px]">
            COLLECT MORE STARS & EARN REWARDS
          </h4>
          <span className="text-[rgba(0,0,0,0.8)] font-[600] leading-[1.5] sx:text-[14px]">
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </span>
          {loadingOnCheck?<CircularProgress size={"20px"}/>:<p className={`text-[10px] text-[#e75b52] mt-[15px] ${errMess?"block":"hidden"}`}>{errMess}</p>}
          <div className="mt-[50px] absolute right-0 ssx:mt-[30px]">
            <FormSubmit name="Create account" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
