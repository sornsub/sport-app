import React, { useState, useRef, useEffect } from "react";

import {
  Box,
  Typography,
  IconButton,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Paper,
  Tooltip
} from "@mui/material";

const lapsDefault = {
  lapsList: [],
  lastLapTime: 0,
  fastest: {
    lapTime: Infinity,
    index: -1
  },
  slowest: {
    lapTime: -1,
    index: -1
  }
};

const Stopwatch = () => {
  const [time, setTime] = useState(0.0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState(lapsDefault);
  const intervalRef = useRef(0);

  const formatTime = () => {
    const sec = `${Math.floor(time) % 60}`.padStart(2, "0");
    const min = `${Math.floor(time / 60) % 60}`.padStart(2, "0");
    const hour = `${Math.floor(time / 3600)}`.padStart(2, "0");
    return (
      <>
        <Typography sx={{color: "primary.main",}} variant="h1">{[hour, min, sec].join(":")}</Typography>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Box sx={{
                    width: "450px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    mb: 5,
                  }}>
            {["hr", "min", "sec"].map((unit) => (
              <Typography key={unit} vairant="overline">
                {unit}
              </Typography>
            ))}
          </Box>
        </Box>
      </>
    );
  };

  const handelPlayPause = () => {
    setIsActive(!isActive);
  };
  const handelReset = () => {
    setTime(0);
    setIsActive(false);
    setLaps(lapsDefault);
  };
  const handelLaps = () => {
    const lapTime = time - laps.lastLapTime;
    const thisLap = {
      lapIndex: laps.lapsList.length,
      lapTime: lapTime,
      totalTime: time
    };

    const newSlowest = { ...laps.slowest };
    if (thisLap.lapTime > laps.slowest.lapTime) {
      newSlowest.lapTime = thisLap.lapTime;
      newSlowest.index = laps.lapsList.length;
    }
    const newFastest = { ...laps.fastest };
    if (thisLap.lapTime < laps.fastest.lapTime) {
      newFastest.lapTime = thisLap.lapTime;
      newFastest.index = laps.lapsList.length;
    }

    const newLaps = {
      lapsList: [...laps.lapsList, thisLap],
      lastLapTime: Math.floor(time),
      slowest: newSlowest,
      fastest: newFastest
    };

    setLaps(newLaps);
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setTimeout(() => setTime(time + 0.1), 100);
      return () => clearTimeout(intervalRef.current);
    }
  }, [time, isActive]);

  return (
    <>
      <Grid m={5} >
        <Grid item>{formatTime()}</Grid>
        <Grid item>
          <ControlButtons
            args={{
              time,
              isActive,
              handelPlayPause,
              handelLaps,
              handelReset
            }}
          />
        </Grid>
        <Grid item>{laps.lapsList.length > 0 && <Laps laps={laps} />}</Grid>
      </Grid>
    </>
  );
};

const ControlButtons = ({
  args: { time, isActive, handelPlayPause, handelLaps, handelReset, classes }
}) => {
  return (
    <>
      {/* play or pause stopwatch */}
      <Tooltip title={isActive ? "Pause" : "Play"}>
        <IconButton onClick={() => handelPlayPause()}>
          {
            {
              true: <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><title>Pause</title><path fill="#6da8e7" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.1 3 19 3M11 16H9V8H11V16M15 16H13V8H15V16Z" /></svg>,
              false: <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><title>Play</title><path fill="#6da8e7" d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12" /></svg>
            }[isActive]
          }
        </IconButton>
      </Tooltip>
    </>
  );
};

const Laps = ({ laps }) => {
//   const classes = useStyle();
  const columns = [
    { id: "lapIndex", label: "Laps" },
    { id: "lapTime", label: "Time" },
    { id: "totalTime", label: "Total" }
  ];

  const formatTime = (time) => {
    const sec = `${Math.floor(time)}`.padStart(2, "0");
    const min = `${Math.floor(time / 60) % 60}`.padStart(2, "0");
    const hour = `${Math.floor(time / 3600)}`.padStart(2, "0");
    return (
      <Typography variant="body1">{[hour, min, sec].join(" : ")}</Typography>
    );
  };
  const formattedRow = (lap, index) => {
    return (
      <TableRow hover="true" key={index}>
        <TableCell >
          <Typography >
            {lap.lapIndex}
          </Typography>
          {laps.lapsList.length > 1 && laps.slowest.index === lap.lapIndex && (
            <Typography>Slowest</Typography>
          )}
          {laps.lapsList.length > 1 && laps.fastest.index === lap.lapIndex && (
            <Typography>Fastest</Typography>
          )}
        </TableCell>
        <TableCell>{formatTime(lap.lapTime)}</TableCell>
        <TableCell>{formatTime(lap.totalTime)}</TableCell>
      </TableRow>
    );
  };

  return (
    <>
      <TableContainer component={Paper} >
        <Table  stickyHeader>
          <colgroup>
            {columns.map((column) => (
              <col style={{ minWidth: "100px" }} />
            ))}
          </colgroup>
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {laps.lapsList
              .slice()
              .reverse()
              .map((lap, index) => formattedRow(lap, index))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Stopwatch;
