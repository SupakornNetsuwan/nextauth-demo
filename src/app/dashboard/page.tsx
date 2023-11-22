import React from "react";
import auth from "@/core/utils/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <div className="m-8 bg-blue-50 p-12 rounded">
        <pre className="text-center">{JSON.stringify(session)}</pre>
      </div>
    </div>
  );
};

export default Dashboard;
