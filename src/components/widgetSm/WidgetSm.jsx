import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./widgetSm.css"
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            alt=""
            className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allan</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            alt=""
            className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allan</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            alt=""
            className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Allan</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
