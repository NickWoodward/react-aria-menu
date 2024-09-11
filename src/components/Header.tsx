import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="flex justify-between px-4">
      <div className="">LOGO</div>
      <MobileMenu />
    </div>
  );
};
