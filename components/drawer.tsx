import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Drawer(props: Props) {
  const drawerHandler = (event: boolean) => {
    setIsOpen(true);
  };
  const { children, isOpen, setIsOpen } = props;

  return (
    <div
      className={
        "fixed right-0 top-0 bg-gray-100 z-10  h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
        (isOpen
          ? " translate-x-0   w-[300px] opacity-1"
          : " translate-x-full ")
      }
    >
      {" "}
      {children}
    </div>
  );
}
