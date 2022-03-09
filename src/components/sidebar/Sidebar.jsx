import "./sidebar.css"
import { LineStyle, Analytics, TrendingUp, PermIdentity,
Storefront,
AttachMoney,
BarChart,
MailOutline,
DynamicFeed,
ChatBubbleOutline,
WorkOutline, 
Report } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
          <div className="sidebarWrapper"> 
            <div className="sideMenu">
              {/* k */}
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                 <LineStyle className="sidebarIcon" />
                 Home
                 </li>
                 <li className="sidebarListItem">
                 <Analytics className="sidebarIcon" />
                 Analytics
                 </li>
                 <li className="sidebarListItem">
                 <TrendingUp className="sidebarIcon" />
                 Trending up
                 </li>
               </ul>  
            </div>
            <div className="sideMenu">
              {/* k */}
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                 <PermIdentity className="sidebarIcon" />
                 Users
                 </li>
                 <li className="sidebarListItem">
                 <Storefront className="sidebarIcon" />
                 Products
                 </li>
                 <li className="sidebarListItem">
                 <AttachMoney className="sidebarIcon" />
                 Transactions
                 </li>
                 <li className="sidebarListItem">
                 <BarChart className="sidebarIcon" />
                 Reports
                 </li>
               </ul>  
            </div>
            <div className="sideMenu">
              {/* k */}
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                 <MailOutline className="sidebarIcon" />
                 Mail
                 </li>
                 <li className="sidebarListItem">
                 <DynamicFeed className="sidebarIcon" />
                 Feedback
                 </li>
                 <li className="sidebarListItem">
                 <ChatBubbleOutline className="sidebarIcon" />
                 Messages
                 </li>
               </ul>  
            </div>
            <div className="sideMenu">
              {/* k */}
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                 <LineStyle className="sidebarIcon" />
                 Home
                 </li>
                 <li className="sidebarListItem">
                 <Analytics className="sidebarIcon" />
                 Analytics
                 </li>
                 <li className="sidebarListItem">
                 <TrendingUp className="sidebarIcon" />
                 Trending up
                 </li>
               </ul>  
            </div>
        </div>
    </div>
  )
}
