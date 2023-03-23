function calculateMonthlySavings(interestRate, array_length, initial_savings) {
  var monthSavings = initial_savings;
  var savings_array = [];
  for (var i = 0; i < array_length + 1; i++) {
    savings_array.push(monthSavings);
    monthSavings = monthSavings * (1 + (interestRate/100 / 12));
  }
  return savings_array;
}

var accounts_info = [
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
      accounts_info.forEach((product, index) => {
        const item = document.createElement('a');
        item.classList.add('list-group-item', 'list-group-item-action');
        item.innerHTML = `
          <button data-index=${index} class="mb-1 account-btn">${product.bank} - ${product.name}</button>
        `;
        bankProductsList.appendChild(item);
      });

      // <p class="mb-1">Initial Interest Rate: ${product.initial_interest_rate}%</p>
      // <p class="mb-1">Promotion Length: ${product.promotion_length} months</p>
      // <p class="mb-1">Standard Interest Rate: ${product.standard_interest_rate}%</p>



// Define the data for the two series
var chartData = [  {    
    name: accounts_info[0].bank + ':' + accounts_info[0].name,
    data: []
  },
  {
    name: accounts_info[1].bank + ':' + accounts_info[1].name,
    data: []
  }
];

// Define the initial savings value
var savings = 10000;
chartData[0].data = calculateMonthlySavings(accounts_info[0].standard_interest_rate, 12, savings)
chartData[1].data = calculateMonthlySavings(accounts_info[1].standard_interest_rate, 12, savings)

// Chart Numbers that update with mouse
var series0Data = chartData[0].data;
var series1Data = chartData[1].data;

// Define the options for the chart
var chartOptions = {
  chart: {
    type: 'areaspline',
    height: 200,
    backgroundColor: '#fff',
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    visible: false
  },
  yAxis: {
    title: {
      text: '',
    },
    min: savings,
    visible: false
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
        point: {
            events: {
                mouseOver: function () {
                    document.getElementById('savings1-value').innerText = '$ ' + series0Data[this.x].toFixed((0));
                    document.getElementById('savings2-value').innerText = '$ ' + series1Data[this.x].toFixed((0));
                }
            }
        },
        events: {
            mouseOut: function () {
                document.getElementById('savings1-value').innerText = '$ ' + series0Data[12].toFixed((0));
                document.getElementById('savings2-value').innerText = '$ ' + series1Data[12].toFixed((0));
            }
        },
        color: '#90CAF9',
        fillOpacity: 0.1,
        marker: {
            enabled: false
        }
    }
  },
  series: [{
    data: chartData[0].data,
    color: '#7CB6B7'
}, {
    data: chartData[1].data,
    color: '#FAB131'
  }],
  credits: {
    enabled: false
    },
    tooltip: {
        enabled: false
    }
};

// Create the chart
var savings_chart = Highcharts.chart('chart-container-savings', chartOptions);
var current_product_index = 0;

// Add click event listeners to each button
var account_buttons = document.querySelectorAll('.account-btn');
account_buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Retrieve the index of the clicked button
    current_product_index = this.getAttribute('data-index');

    // Retrieve the corresponding account information from the array
    var account = accounts_info[current_product_index];
    var data = calculateMonthlySavings(account.standard_interest_rate, 12, savings);

    // Update the chart data with the new values
    savings_chart.series[1].update({
      name: account.name,
      data,
    });
    series1Data = data;
    document.getElementById('savings2-value').innerText = '$ ' + series1Data[12].toFixed((0));
  });
});

// Add click event for calculate button
var calcButton = document.getElementById("calculate-savings");
calcButton.addEventListener('click', function() {
  var interestRate = parseFloat(document.getElementById('interest_rate_input').value);
  savings = parseFloat(document.getElementById('initial_savings_input').value);
  
  var account = accounts_info[current_product_index];

  var data0 = calculateMonthlySavings(interestRate, 12, savings);
  var data1 = calculateMonthlySavings(account.standard_interest_rate, 12, savings);

  savings_chart.series[0].update({
    name: 'Your Current Rates',
    data: data0,
  });

  savings_chart.series[1].update({
    name: 'Your Current Rates',
    data: data1,
  });

  console.log(data0);
  console.log(data1);


  savings_chart.yAxis[0].setExtremes(savings, null);

  // chartOptions.yAxis.min = savings;
  // savings_chart.yAxis[0].update({
  //   max: savings
  // });

  document.getElementById('savings1-value').innerText = '$ ' + series1Data[12].toFixed((0));

});