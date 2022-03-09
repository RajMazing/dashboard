import React from 'react'
import "./topbar.css"
import { NotificationsNone, ShoppingCart, Settings } from '@mui/icons-material';



export default function Topbar() {
  return (
    <div className = "topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          {/* logo goes here */}
          <span className="logo"> LogoForCompany </span>
        </div>
        <div className="topRight">
          {/* icons are in this section */}
            <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
                <ShoppingCart />
                <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
                <Settings />
               </div>
               <img src="https://www.adobe.com/express/create/profile-picture/media_1aa73adb730e1506f78d86386920c47d3281dda24.jpeg?width=400&format=jpeg&optimize=medium" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
  )
}
