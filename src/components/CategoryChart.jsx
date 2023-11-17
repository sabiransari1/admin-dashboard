import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@chakra-ui/react";

export const CategoryChart = ({ category }) => {
  let categoryArr = Object.keys(category)?.map((key) => category[key]);

  return (
    <Box>
      <Doughnut
        data={{
          labels: [
            "Suits",
            "Shirts",
            "Jeans",
            "Trousers",
            "Kurti",
            "Saree",
            "Jacket",
            "Western",
          ],
          datasets: [
            {
              label: "Category Chart",
              data: categoryArr,
              backgroundColor: [
                "#ff6384",
                "#788097",
                "#36a2eb",
                "#ffcd56",
                "#9966ff",
                "#ff9f40",
                "#c9cbcf",
                "#4bc0c0",
              ],
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
              text: "Category Chart",
            },
          },
        }}
      />
    </Box>
  );
};
