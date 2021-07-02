import React from 'react'
import Charts from '../../charts/Charts'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from "./../../../dummyData"
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts data={userData} title="User Analytics" grid dataKey="activeUsr" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />

      </div>
    </div>
  )
}
