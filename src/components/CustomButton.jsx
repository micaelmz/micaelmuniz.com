import React from "react";

export default function CustomButton({ backgroundColor, textColor, className, children, onClick}){
  return (
      <button {...onClick && { onClick }} style={{ backgroundColor, color: textColor }} className={className + " custom-button"}>{children}</button>
  )
}