import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const GuestLayout = async ({ children }) => {
  const session = await getServerSession(Options);
  if (session?.user) redirect("/dashboard");
  return <>{children}</>;
};

export default GuestLayout;