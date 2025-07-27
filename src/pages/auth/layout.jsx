import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-screen h-screen relative flex flex-col p-7 bg-black max-sm:p-0">
      <Outlet />
    </div>
  );
}
