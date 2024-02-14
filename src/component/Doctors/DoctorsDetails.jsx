import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { adminVerifyRequest, doctorInfoRequest } from "../../Modules/action";

export default function DoctorsDetails() {
  const { doctor_id } = useParams();
  const location = useLocation();
  const doctor = location.state;

  // console.log("doctor", doctor);

  const dispatch = useDispatch();
  const verifyResponse = useSelector((state) => state.adminVerifyRequest);

  const handleVerifyUser = (doctor_id) => {
    dispatch(adminVerifyRequest({ id: doctor_id }));
  }


  const doctorInfoResponse = useSelector((state) => state.
    doctorInfoReducer);

  let doctorDetails = doctorInfoResponse.doctorInfo.doctor;
  useEffect(() => {

    dispatch(doctorInfoRequest({ id: doctor_id }));

  }, [])


  return (
    <div>
      <div>
        {doctorInfoResponse.loading ? (
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Stack>)
          : (
            <Stack style={{ justifyContent: "center", alignItems: "center" }}>
              <Typography sx={{ m: 3 }}>
                Dr:
                <span style={{ color: "green" }}>{doctor?.name || doctorDetails?.name}</span>
              </Typography>
              <Typography>
                call me on :
                <span style={{ color: "green" }}>
                  {doctor?.phoneNumber || doctorDetails?.phoneNumber}
                </span>
              </Typography>
              <Typography sx={{ m: 3 }}>

                specialization:
                <span style={{ color: "green" }}>
                  {doctor?.specialization[0]?.name || doctorDetails?.specialization[0]?.name}

                </span>
              </Typography>
              <Stack sx={{ m: 3 }}>
                <Button
                  variant="contained"
                  onClick={() => handleVerifyUser(doctor_id)}
                >
                  verify me
                </Button>
              </Stack>
            </Stack>
          )}
      </div>
    </div>
  );
}
