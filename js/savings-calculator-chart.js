var accounts = [
  {
    "bank": "EQ Bank",
    "name": "Savings Plus Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 2.50
  },
  {
    "bank": "Saven Financial",
    "name": "High Interest Savings Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 3.75
  },
  {
    "bank": "Scotiabank",
    "name": "Momentum PLUS Savings Account (360-premium)",
    "initial_interest_rate": 5.00,
    "promotion_length": 5,
    "standard_interest_rate": 1.60
  },
  {
    "bank": "Alterna Bank",
    "name": "High Interest eSavings Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 2.50
  },
  {
    "bank": "National Bank",
    "name": "High Interest Savings Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 1.50
  },
  {
    "bank": "DUCA Credit Union",
    "name": "Earn More Savings Promotion Account",
    "initial_interest_rate": 4.75,
    "promotion_length": 1,
    "standard_interest_rate": 1.00
  },
  {
    "bank": "HSBC",
    "name": "High Rate Savings Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 1.05
  },
  {
    "bank": "Simplii Financial",
    "name": "High Interest Savings Account",
    "initial_interest_rate": 5.25,
    "promotion_length": 1,
    "standard_interest_rate": 0.40
  },
  {
    "bank": "Scotiabank",
    "name": "Money Master Savings Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 0.01
  },
  {
    "bank": "Oaken Financial",
    "name": "Oaken Savings Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 3.40
  },
  {
    "bank": "CIBC",
    "name": "eAdvantage Savings Account",
    "initial_interest_rate": 4.25,
    "promotion_length": 4,
    "standard_interest_rate": 1.40
  },
  {
    "bank": "Scotiabank",
    "name": "Savings Accelerator Account",
    "initial_interest_rate": 4.05,
    "promotion_length": 1,
    "standard_interest_rate": 1.40
  },
  {
    "bank": "RBC Royal Bank",
    "name": "High Interest eSavings",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 1.50
  },
  {
    "bank": "TD Bank",
    "name": "High Interest Savings Account",
    "initial_interest_rate": 0,
    "promotion_length": 0,
    "standard_interest_rate": 0.05
  },
  {
    "bank": "TD Bank",
    "name": "Every Day Savings Account",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 0.01
  },
  {
    "bank": "RBC Royal Bank",
    "name": "Day to Day Savings",
    "initial_interest_rate": 0.00,
    "promotion_length": 0,
    "standard_interest_rate": 0.01
  }
];

// Load Accounts onto list
const bankProductsList = document.getElementById('savings-products-list');
accounts.forEach(product => {
  const item = document.createElement('a');
  item.classList.add('list-group-item', 'list-group-item-action');
  item.innerHTML = `
    <h5 class="mb-1">${product.bank} - ${product.name}</h5>

  `;
  bankProductsList.appendChild(item);
});


// // Define the initial savings value
// var savings = 10000;

// // Define the data for the two series
// var chartData = [  {    name: '0.01%',    data: []
//   },
//   {
//     name: '0.05%',
//     data: []
//   }
// ];

// var monthSavings1 = savings;
// var monthSavings2 = savings;
// for (var i = 0; i < 13; i++) {
//     chartData[0].data.push(monthSavings1);
//     chartData[1].data.push(monthSavings2);
//     monthSavings1 = monthSavings1 * (1 + (0.01/12));
//     monthSavings2 = monthSavings2 * (1 + (0.05/12));
// }


// // Define the options for the chart
// var chartOptions = {
//   chart: {
//     type: 'areaspline',
//     height: 200,
//     backgroundColor: '#0c3226',
//   },
//   title: {
//     text: null
//   },
//   xAxis: {
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//     visible: false
//   },
//   yAxis: {
//     title: {
//       text: '',
//     },
//     min: savings,
//     // max: savings + 800, 
//     visible: false
//   },
//   legend: {
//     enabled: false
//   },
//   plotOptions: {
//     series: {
//         point: {
//             events: {
//                 mouseOver: function () {
//                     document.getElementById('savings1-value').innerText = '$ ' + chartData[0].data[this.x].toFixed((0));
//                     document.getElementById('savings2-value').innerText = '$ ' + chartData[1].data[this.x].toFixed((0));
//                 }
//             }
//         },
//         events: {
//             mouseOut: function () {
//                 document.getElementById('savings1-value').innerText = '$ ' + chartData[0].data[12].toFixed((0));
//                 document.getElementById('savings2-value').innerText = '$ ' + chartData[1].data[12].toFixed((0));
//             }
//         },
//         color: '#90CAF9',
//         fillOpacity: 0.1,
//         marker: {
//             enabled: false
//         }
//     }
//   },
//   series: [{
//     // name: '0.01% interest rate',
//     data: chartData[0].data,
//     color: '#7CB6B7'
// }, {
//     // name: '0.05% interest rate',
//     data: chartData[1].data,
//     color: '#FAB131'
//   }],
//   credits: {
//     enabled: false
//     },
//     tooltip: {
//         enabled: false
//     }
// };

// // Create the chart
// Highcharts.chart('chart-container-savings', chartOptions);