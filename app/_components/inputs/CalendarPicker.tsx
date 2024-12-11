import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

interface CalendarPickerProps {
  onSelectDate: (date: Date) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // console.log(selectedDate)

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const renderHeader = () => (
    <div className="flex items-center justify-between p-4">
      <button
        onClick={handlePreviousMonth}
        className="text-gray-500 hover:text-gray-700"
      >
        &lt;
      </button>
      <span className="text-lg font-bold">
        {format(currentMonth, "MMMM yyyy")}
      </span>
      <button
        onClick={handleNextMonth}
        className="text-gray-500 hover:text-gray-700"
      >
        &gt;
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
      <div className="grid grid-cols-7 text-center text-gray-700 font-semibold">
        {days.map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows: JSX.Element[] = [];
    let days: JSX.Element[] = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isSelected = selectedDate && isSameDay(day, selectedDate);

        days.push(
          <div
            key={day.toISOString()}
            onClick={() => isCurrentMonth && handleDateClick(day)}
            className={`p-2 text-center cursor-pointer ${
              isSelected
                ? "bg-blue-500 text-white"
                : isCurrentMonth
                ? "text-black"
                : "text-gray-400"
            } hover:bg-blue-100`}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={rows.length} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default CalendarPicker;
