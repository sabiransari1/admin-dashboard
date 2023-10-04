import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@chakra-ui/react";

export const GenderChart = ({ gender }) => {
  let genderArr = Object.keys(gender)?.map((key) => gender[key]);

  return (
    <Box>
      <Pie
        data={{
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "Gender Chart",
              data: genderArr,
              backgroundColor: ["#4bc0c0", "#ff6384"],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: "Gender Chart",
            },
          },
        }}
      />
    </Box>
  );
};
