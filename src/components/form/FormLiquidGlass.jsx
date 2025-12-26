import React from "react";

function FormLiquidGlass({ children, onSubmit, className }) {
  return (
    <form
      onSubmit={onSubmit}
      method="post"
      className={` 
     select-none font-sans font-medium bg-white/1 border border-black/15 backdrop-blur-xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.05),0_0_9px_rgba(0,0,0,0.05),0_3px_8px_rgba(0,0,0,0.05)] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none transition
     inline-flex 
     pb-20
     w-screen
     flex-col
     md:w-[500px]
     lg:w-[600px]
     gap-6
     pt-8
     items-center
     rounded-[9px]
      ${className}
   `}
    >
      {children}
    </form>
  );
}

export default FormLiquidGlass;
