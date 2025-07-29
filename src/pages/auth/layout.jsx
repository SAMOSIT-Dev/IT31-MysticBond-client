import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-screen h-screen min-h-0 max-h-screen flex flex-col p-7 bg-black max-sm:p-0">
      <Outlet />
    </div>
  );
}
