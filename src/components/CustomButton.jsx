import React from "react";

export default function CustomButton({ backgroundColor, textColor, href, className, children }){
  return (
      <a href={href ? href : "#"} style={{backgroundColor: backgroundColor, color: textColor}} className={className + " custom-button"}>{children}</a>
  )
}