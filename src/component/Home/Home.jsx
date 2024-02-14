import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDoctors } from "../../Modules/action";
// import { Outlet } from 'react-router-dom';

import Table from "../Table/Table";
import { CircularProgress, Stack } from "@mui/material";

function Layout() {
  const doctorsData = useSelector((state) => state);
  const dispatch = useDispatch();
  const data = doctorsData.doctorsReducer;
  const doctors = doctorsData?.doctorsReducer?.items?.doctors;

  useEffect(async () => {
    dispatch(getAllDoctors());
  }, []);

  return (
    <Stack>
      {data.loading && (
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Stack>
      )}
      {doctors ? (
        <Stack>
          <h2>Doctors List</h2>
          <Table doctors={doctors} />
        </Stack>
      ) : (
        <h2> {data.error}</h2>
      )}
    </Stack>
  );
}

export default Layout;
