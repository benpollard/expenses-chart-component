import Chart, { Tooltip } from "chart.js/auto";

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

Chart.defaults.font.family = '"DM Sans", sans-serif';

new Chart(document.getElementById("card__expenses"), {
  type: "bar",
  data: {
    labels: data.map((row) => row.day),
    datasets: [
      {
        borderRadius: 6,
        backgroundColor: "rgba(236, 119, 95, 1)",
        hoverBackgroundColor: "rgba(118, 181, 188, 1)",
        borderSkipped: false,
        data: data.map((row) => row.amount),
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "rgba(147, 134, 123, 1)",
        },
      },
      y: {
        display: false,
        max: 70,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: () => {
            return "";
          },
          label: (tooltipItem) => {
            var tooltipText = "";
            if (tooltipItem.dataset.data[tooltipItem.dataIndex] != null)
              tooltipText =
                tooltipItem.dataset.data[tooltipItem.dataIndex].toString();
            return "$" + tooltipText;
          },
        },
        displayColors: false,
        caretSize: 0,
        xAlign: "center",
        yAlign: "bottom",
        backgroundColor: "rgba(56, 35, 20, 1)",
        bodyColor: "rgba(255, 250, 245, 1)",
        bodyFont: {
          weight: 700,
        },
      },
    },
  },
});
