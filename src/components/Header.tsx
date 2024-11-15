import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed w-screen flex justify-between items-center px-4 h-[3rem] bg-slate-700">
      <div className="text-slate-200">LOGO</div>
      <MobileMenu />
    </div>
  );
};
