"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { signOut } from "@/lib/actions/auth.actions";

const LogoutButton = ({
  initials,
  name,
}: {
  initials: string;
  name: string;
}) => {
  //   const [btnHidden, setBtnHidden] = useState(true);
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="flex items-center gap-3">
      {/* <div
        className="cursor-pointer"
        onClick={() => {
          console.log("object");
          console.log(btnHidden);
          setBtnHidden(!btnHidden);
        }}
      >
        <div
          //   onClick={() => setBtnHidden(!btnHidden)}
          className="w-9 h-9  rounded-full bg-primary-100 text-white flex items-center justify-center font-semibold"
        >
          {initials}
        </div>
      </div>
      <span className="text-sm text-white font-semibold">{name}</span> */}
      {/* {!btnHidden && ( */}
      <Button onClick={handleLogout} className="btn-primary max-sm:w-full">
        Logout
      </Button>
      {/* )} */}
    </div>
  );
};

export default LogoutButton;
