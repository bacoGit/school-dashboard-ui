"use client"

import { Calendar, View, Views, momentLocalizer } from 'react-big-calendar'
import { calendarEvents } from '@/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useState } from 'react';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)

  const handleOnChangeView = (selectedView:View)=> {
    setView(selectedView);
  }
  
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week","day"]}
      style={{ height: "98%" }}
      view={view}
      onView={handleOnChangeView}
      min={new Date(2024,9,1,7,0,0)}
      max={new Date(2025,7,0,17,0,0)}
    />);
};

export default BigCalendar;