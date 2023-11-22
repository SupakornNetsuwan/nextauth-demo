import React from "react";
import auth from "@/core/utils/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return <div>Profile</div>;
};

export default page;
