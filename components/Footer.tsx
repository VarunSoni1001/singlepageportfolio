import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-black py-2 text-center">
      <p className="text-base">
        &copy; {new Date().getFullYear()} <span className="font-zina">VS</span>.
        All rights reserved.
      </p>
      <p className="text-xs mt-1">Designed and developed by Varun Soni</p>
    </footer>
  );
};
