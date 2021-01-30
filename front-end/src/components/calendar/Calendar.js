import React, { useState, useEffect } from "react";
import moment from "moment";

import Week from "./Week";
import Day from "./Day";

import "./Calendar.css"

export default function Calendar() {

    const [value, setValue] = useState(moment())
    const [calendar, setCalendar] = useState([]);

    
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");

    useEffect(() => {
        const a = [];
        const day = startDay.clone().subtract(1, "day");
        while(day.isBefore(endDay, "day")) {
            a.push(
                Array(7).fill(0).map(() => (
                    day.add(1, "day").clone())
                ));
        }
        setCalendar(a);
    }, [value])

    return (

        <div className = "calendar">
            <h1 className = "month-header">Jan</h1>
            {calendar.map((week) => (
                <div className = "week">
                    {week.map((day) => (
                        <div className = "day" onClick = {() => setValue(day)}>
                            {day.format("D")}
                        </div>
                    ))}
                </div>
            ))}
        </div>


        // <div className = "calendar-container">
        //     <table>
        //         <th className = "weekday column-head">
        //             Sunday
        //         </th>
        //         <th className = "weekday column-head">
        //             Monday
        //         </th>
        //         <th className = "weekday column-head">
        //             Tuesday
        //         </th>
        //         <th className = "weekday column-head">
        //             Wednesday
        //         </th>
        //         <th className = "weekday column-head">
        //             Thursday
        //         </th>
        //         <th className = "weekday column-head">
        //             Friday
        //         </th>
        //         <th className = "weekday column-head">
        //             Saturday
        //         </th>
        //         {/* 1 */}
        //         <Week>
        //             <Day>
        //                 asdf
        //             </Day>
        //             <Day>
        //                 asdf
        //             </Day>
        //         </Week>
        //         {/* 2 */}
        //         <Week>
        //             <Day>
        //                 asdf
        //             </Day>
        //         </Week>
        //         {/* 3 */}
        //         <Week>
        //             <Day>
        //                 asdf
        //             </Day>
        //         </Week>
        //         {/* 4 */}
        //         <Week>
        //             <Day>
        //                 asdf
        //             </Day>
        //         </Week>
        //         {/* 5 */}
        //         <Week>
        //             <Day>
        //                 asdf
        //             </Day>
        //         </Week>
        //         {/* 6 */}
        //         <Week>
        //             <Day>
        //                 fasd
        //             </Day>
        //         </Week>
        //     </table>
        // </div>
    )
}