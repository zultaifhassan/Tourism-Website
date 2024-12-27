import React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

const PDcalender = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangeCalendar", "DateRangeCalendar"]}>
        <DemoItem label="Package Dates">
          <DateRangeCalendar calendars={1} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default PDcalender;
