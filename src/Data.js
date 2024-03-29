const userdata = [
  {
    Date: "4/1/22",
    Month: "Jan",
    Year: 2022,
    Supplier: "Reliance",
    "Emissions(in CO2e)": 1698,
    "Revenue (in INR)": 203456,
    "R/E": 120,
    "YOY R/E Change": null,
  },
  {
    Date: "3/1/23",
    Month: "Jan",
    Year: 2023,
    Supplier: "Reliance",
    "Emissions(in CO2e)": 1790,
    "Revenue (in INR)": 245678,
    "R/E": 137,
    "YOY R/E Change": "15%",
  },
  {
    Date: "2/2/22",
    Month: "Feb",
    Year: 2022,
    Supplier: "Reliance",
    "Emissions(in CO2e)": 2108,
    "Revenue (in INR)": 203456,
    "R/E": 96.5,
    "YOY R/E Change": null,
  },
  {
    Date: "5/2/23",
    Month: "Feb",
    Year: 2023,
    Supplier: "Adani",
    "Emissions(in CO2e)": 2205,
    "Revenue (in INR)": 220000,
    "R/E": 99.8,
    "YOY R/E Change": "3%",
  },
  {
    Date: "6/3/22",
    Month: "Mar",
    Year: 2022,
    Supplier: "Reliance",
    "Emissions(in CO2e)": 2251,
    "Revenue (in INR)": 245647,
    "R/E": 109.1,
    "YOY R/E Change": null,
  },
  {
    Date: "7/3/23",
    Month: "Mar",
    Year: 2023,
    Supplier: "Adani",
    "Emissions(in CO2e)": 2345,
    "Revenue (in INR)": 287545,
    "R/E": 122.6,
    "YOY R/E Change": "12%",
  },
  {
    Date: "2/4/22",
    Month: "Apr",
    Year: 2022,
    Supplier: "Shaurya Drugs",
    "Emissions(in CO2e)": 1602,
    "Revenue (in INR)": 179853,
    "R/E": 112.3,
    "YOY R/E Change": null,
  },
  {
    Date: "2/4/23",
    Month: "Apr",
    Year: 2023,
    Supplier: "Adani",
    "Emissions(in CO2e)": 1503,
    "Revenue (in INR)": 195395,
    "R/E": 130.0,
    "YOY R/E Change": "16%",
  },
  {
    Date: "3/5/22",
    Month: "May",
    Year: 2022,
    Supplier: "Orlife Healthcare",
    "Emissions(in CO2e)": 3456,
    "Revenue (in INR)": 464464,
    "R/E": 134.4,
    "YOY R/E Change": null,
  },
  {
    Date: "4/5/23",
    Month: "May",
    Year: 2023,
    Supplier: "Adani",
    "Emissions(in CO2e)": 4634,
    "Revenue (in INR)": 575747,
    "R/E": 124.2,
    "YOY R/E Change": "-8%",
  },
  {
    Date: "3/6/22",
    Month: "June",
    Year: 2022,
    Supplier: "Orlife Healthcare",
    "Emissions(in CO2e)": 3245,
    "Revenue (in INR)": 464464,
    "R/E": 143.1,
    "YOY R/E Change": null,
  },
  {
    Date: "4/6/23",
    Month: "June",
    Year: 2023,
    Supplier: "Adani",
    "Emissions(in CO2e)": 4634,
    "Revenue (in INR)": 575747,
    "R/E": 124.2,
    "YOY R/E Change": "-13%",
  },
  {
    Date: "3/7/22",
    Month: "July",
    Year: 2022,
    Supplier: "Rezicure Pharmaceuticals",
    "Emissions(in CO2e)": 3543,
    "Revenue (in INR)": 464464,
    "R/E": 131.1,
    "YOY R/E Change": null,
  },
  {
    Date: "5/7/23",
    Month: "July",
    Year: 2023,
    Supplier: "Reliance",
    "Emissions(in CO2e)": 3487,
    "Revenue (in INR)": 575747,
    "R/E": 165.1,
    "YOY R/E Change": "26%",
  },
  {
    Date: "3/8/22",
    Month: "Aug",
    Year: 2022,
    Supplier: "Rezicure Pharmaceuticals",
    "Emissions(in CO2e)": 5445,
    "Revenue (in INR)": 643864,
    "R/E": 118.2,
    "YOY R/E Change": null,
  },
  {
    Date: "5/8/23",
    Month: "Aug",
    Year: 2023,
    Supplier: "Merion Care",
    "Emissions(in CO2e)": 5258,
    "Revenue (in INR)": 689747,
    "R/E": 131.2,
    "YOY R/E Change": "11%",
  },
  {
    Date: "2/9/22",
    Month: "Sep",
    Year: 2022,
    Supplier: "Ruzette Organics",
    "Emissions(in CO2e)": 4343,
    "Revenue (in INR)": 564651,
    "R/E": 130.0,
    "YOY R/E Change": null,
  },
  {
    Date: "3/9/23",
    Month: "Sep",
    Year: 2023,
    Supplier: "Ruzette Organics",
    "Emissions(in CO2e)": 4524,
    "Revenue (in INR)": 578965,
    "R/E": 128.0,
    "YOY R/E Change": "-2%",
  },
  {
    Date: "6/10/22",
    Month: "Oct",
    Year: 2022,
    Supplier: "Steller Bio Labs",
    "Emissions(in CO2e)": 3434,
    "Revenue (in INR)": 516513,
    "R/E": 150.4,
    "YOY R/E Change": null,
  },
  {
    Date: "6/10/23",
    Month: "Oct",
    Year: 2023,
    Supplier: "Steller Bio Labs",
    "Emissions(in CO2e)": 3332,
    "Revenue (in INR)": 524535,
    "R/E": 157.4,
    "YOY R/E Change": "5%",
  },
  {
    Date: "10/11/22",
    Month: "Nov",
    Year: 2022,
    Supplier: "Eskos Pharma",
    "Emissions(in CO2e)": 3464,
    "Revenue (in INR)": 546561,
    "R/E": 157.8,
    "YOY R/E Change": null,
  },
  {
    Date: "10/11/23",
    Month: "Nov",
    Year: 2023,
    Supplier: "Eskos Pharma",
    "Emissions(in CO2e)": 3535,
    "Revenue (in INR)": 576855,
    "R/E": 163.2,
    "YOY R/E Change": "3%",
  },
  {
    Date: "1/12/22",
    Month: "Dec",
    Year: 2022,
    Supplier: "Adani",
    "Emissions(in CO2e)": 2324,
    "Revenue (in INR)": 343535,
    "R/E": 147.8,
    "YOY R/E Change": null,
  },
  {
    Date: "2/12/23",
    Month: "Dec",
    Year: 2023,
    Supplier: "Reliance",
    "Emissions(in CO2e)": 2452,
    "Revenue (in INR)": 354646,
    "R/E": 144.6,
    "YOY R/E Change": "-2%",
  },
];

export default userdata;
