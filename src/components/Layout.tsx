import React from "react"

const Layout = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="bg-layout text-textPrimary">
        {children}
    </div>
  )
}

export default Layout