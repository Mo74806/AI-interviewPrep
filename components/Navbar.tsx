import { getCurrentUser } from "@/lib/actions/auth.actions";
import { getInitials } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";

const Navbar = ({ name }: { name: string }) => {
  const initials = name ? getInitials(name).toUpperCase() : "U";

  return (
    <nav className="flex justify-between items-center ">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
        <h2 className="text-primary-100">InterviewPro</h2>
      </Link>
      {/* Avatar with initials */}
      <LogoutButton initials={initials} name={name} />
    </nav>
  );
};

export default Navbar;
