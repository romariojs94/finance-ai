import React from "react";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="h-100-items-center font- flex min-h-screen items-center justify-center gap-16 p-8 pb-20 [family-name:var(--font-geist-sans)] sm:p-20">
      <UserButton showName />
    </div>
  );
};

export default page;
