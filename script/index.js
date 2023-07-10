// sidebar
let sidebar = document.querySelector(".sidebar-menu");
let minSidebar = document.querySelector(".js-min-sidebar-icon");
let chevronLeft = document.querySelector(".bx-chevron-left");
// middle sidebar
let closeSide = document.querySelector(".lg-sidebar-icon");

minSidebar.addEventListener("click", () => {
  if (chevronLeft.classList.toggle("bx-chevron-right")) {
    sidebar.classList.add("minSidebar");
  } else {
    sidebar.classList.remove("minSidebar");
  }
});

closeSide.addEventListener("click", () => {
  if (sidebar.classList.toggle("close")) {
    sidebar.classList.add("close");
  } else {
    sidebar.classList.remove("close");
  }
});

// charts
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let cardChart = new Chart(document.getElementById("card-chart1"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,.55)",
        pointBackgroundColor: "transparent",
        data: [
          random(51, 84),
          random(51, 84),
          random(51, 84),
          random(51, 84),
          random(51, 84),
          random(51, 84),
          random(51, 84),
        ],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: { display: false },
        ticks: { display: false },
      },
    },
    elements: {
      line: { borderWidth: 1, tension: 0.4 },
      point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
    },
  },
});

cardChart = new Chart(document.getElementById("card-chart2"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,255,255,.2)",
        borderColor: "rgba(255,255,255,.55)",
        data: [
          random(1, 34),
          random(1, 34),
          random(1, 34),
          random(1, 34),
          random(1, 34),
          random(1, 34),
          random(1, 34),
        ],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
      },
      y: {
        min: -9,
        max: 39,
        display: false,
        grid: { display: false },
        ticks: { display: false },
      },
    },
    elements: {
      line: { borderWidth: 1 },
      point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
    },
  },
});

cardChart = new Chart(document.getElementById("card-chart3"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,255,255,.2)",
        borderColor: "rgba(255,255,255,.55)",
        data: [
          random(12, 81),
          random(12, 81),
          random(12, 81),
          random(12, 81),
          random(12, 81),
          random(12, 81),
          random(12, 81),
        ],
        fill: true,
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    scales: { x: { display: false }, y: { display: false } },
    elements: {
      line: { borderWidth: 2, tension: 0.4 },
      point: { radius: 0, hitRadius: 10, hoverRadius: 4 },
    },
  },
});

cardChart = new Chart(document.getElementById("card-chart4"), {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,255,255,.2)",
        borderColor: "rgba(255,255,255,.55)",
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        barPercentage: 0.6,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { display: false, drawTicks: false },
        ticks: { display: false },
      },
      y: {
        grid: { display: false, drawBorder: false, drawTicks: false },
        ticks: { display: false },
      },
    },
  },
});

const mainChart = new Chart(document.getElementById("main-chart"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(128, 128, 128, 0.22)",
        borderColor: "#39f",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
        ],
        fill: true,
      },
      {
        label: "My Second dataset",
        borderColor: "#2eb85c",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
        ],
      },
      {
        label: "My Third dataset",
        borderColor: "#e55353",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 1,
        borderDash: [8, 5],
        data: [65, 65, 65, 65, 65, 65, 65],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { drawOnChartArea: false } },
      y: {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      },
    },
    elements: {
      line: { tension: 0.4 },
      point: { radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3 },
    },
  },
});
