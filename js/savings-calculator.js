function calculateMonthlySavings(interestRate, array_length, initial_savings, promotion_length = 0, promotion_rate = 0) {
  var monthSavings = initial_savings;
  var savings_array = [];
  for (var i = 0; i < promotion_length; i++) {
    savings_array.push(monthSavings);
    monthSavings = monthSavings * (1 + (promotion_rate/100 / 12));
  }
  for (var i = 0; i < array_length - promotion_length + 1; i++) {
    savings_array.push(monthSavings);
    monthSavings = monthSavings * (1 + (interestRate/100 / 12));
  }
  return savings_array;
}

function setOriginalValues() {
  document.getElementById('savings1-value').innerText = '$ ' + series0Data[12].toFixed((0));
  document.getElementById('savings2-value').innerText = '$ ' + series1Data[12].toFixed((0));
  document.getElementById('difference-value').innerText = '$ ' + (series1Data[12] - series0Data[12]).toFixed((0));
}

var accounts_info = [
      {
        "bank": "EQ Bank",
        "name": "Savings Plus Account",
        "reference_url":"https://www.eqbank.ca/personal-banking/savings-plus-account",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 2.50
      },
      {
        "bank": "Saven Financial",
        "name": "High Interest Savings Account",
        "reference_url":"https://savenfinancial.ca/en/on-high-interest-savings-account",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 3.75
      },
      {
        "bank": "Scotiabank",
        "name": "Momentum PLUS Savings Account (360-premium)",
        "reference_url": "https://www.scotiabank.com/ca/en/personal/bank-accounts/savings-accounts/momentum-plus-savings-account.html", 
        "initial_interest_rate": 5.00,
        "promotion_length": 5,
        "standard_interest_rate": 1.60
      },
      {
        "bank": "Alterna Bank",
        "name": "High Interest eSavings Account",
        "reference_url": "https://www.alternabank.ca/en/personal/accounts/high-interest-esavings/",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 2.50
      },
      {
        "bank": "National Bank",
        "name": "High Interest Savings Account",
        "reference_url":"https://www.nbc.ca/personal/savings-investments/accounts/high-interest.html",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 1.50
      },
      {
        "bank": "DUCA Credit Union",
        "name": "Earn More Savings Promotion Account",
        "reference_url":"https://www.duca.com/earnmore",
        "initial_interest_rate": 4.75,
        "promotion_length": 1,
        "standard_interest_rate": 1.00
      },
      {
        "bank": "HSBC",
        "name": "High Rate Savings Account",
        "reference_url":"https://www.hsbc.ca/savings-accounts/products/high-rate/",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 1.05
      },
      {
        "bank": "Simplii Financial",
        "name": "High Interest Savings Account",
        "reference_url":"https://www.simplii.com/en/bank-accounts/high-interest-savings.html",
        "initial_interest_rate": 5.25,
        "promotion_length": 1,
        "standard_interest_rate": 0.40
      },
      {
        "bank": "Scotiabank",
        "name": "Money Master Savings Account",
        "reference_url":"https://www.scotiabank.com/ca/en/personal/bank-accounts/savings-accounts/money-master-savings-account.html",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 0.01
      },
      {
        "bank": "Oaken Financial",
        "name": "Oaken Savings Account",
        "reference_url":"https://www.oaken.com/oaken-savings-account/",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 3.40
      },
      {
        "bank": "CIBC",
        "name": "eAdvantage Savings Account",
        "reference_url": "https://www.cibc.com/en/personal-banking/bank-accounts/savings-accounts/eadvantage-high-interest-savings-account.html",
        "initial_interest_rate": 4.25,
        "promotion_length": 4,
        "standard_interest_rate": 1.40
      },
      {
        "bank": "Scotiabank",
        "name": "Savings Accelerator Account",
        "reference_url":"https://www.scotiabank.com/ca/en/personal/bank-accounts/savings-accounts/savings-accelerator-account.html",
        "initial_interest_rate": 4.05,
        "promotion_length": 1,
        "standard_interest_rate": 1.40
      },
      {
        "bank": "RBC Royal Bank",
        "name": "High Interest eSavings",
        "reference_url":"https://www.rbcroyalbank.com/accounts/e-savings.html",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 1.50
      },
      {
        "bank": "TD Bank",
        "name": "High Interest Savings Account",
        "reference_url":"https://www.td.com/ca/en/personal-banking/products/bank-accounts/savings-accounts/high-interest-savings-account",
        "initial_interest_rate": 0,
        "promotion_length": 0,
        "standard_interest_rate": 0.05
      },
      {
        "bank": "TD Bank",
        "name": "Every Day Savings Account",
        "reference_url":"https://www.td.com/ca/en/personal-banking/products/bank-accounts/savings-accounts/every-day-savings-account",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 0.01
      },
      {
        "bank": "RBC Royal Bank",
        "name": "Day to Day Savings",
        "reference_url":"https://www.rbcroyalbank.com/accounts/day-to-day-savings.html",
        "initial_interest_rate": 0.00,
        "promotion_length": 0,
        "standard_interest_rate": 0.01
      },
      {
        "bank": "Tangerine",
        "name": "Savings Account",
        "reference_url":"https://www.tangerine.ca/en/products/saving/savings-accounts/savings-account",
        "initial_interest_rate": 5.00,
        "promotion_length": 5,
        "standard_interest_rate": 1.00
      }
    ];
  

// Load Accounts onto list
 const bankProductsList = document.getElementById('savings-products-list');
      accounts_info.forEach((product, index) => {
        const item = document.createElement('a');
        item.classList.add('list-group-item', 'list-group-item-action');
        var innerHTML;
        if (product.initial_interest_rate > 0) {
          innerHTML = `<button style="width:100%" data-index=${index} class="mb-1 account-btn block">${product.bank} <br> ${product.name} <br> Rate: ${product.standard_interest_rate}% <br> Promotional Rate: ${product.initial_interest_rate}% for ${product.promotion_length} months </button>`;
        } else {
          innerHTML = `<button style="width:100%" data-index=${index} class="mb-1 account-btn block">${product.bank} <br> ${product.name} <br> Rate: ${product.standard_interest_rate}% </button>`;
        }
        item.innerHTML = innerHTML;
        bankProductsList.appendChild(item);
      });
      // Add a class to the first button
      document.querySelector('button[data-index="0"]').classList.add('active-primary');


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
chartData[0].data = calculateMonthlySavings(0.5, 12, savings, accounts_info[0].promotion_length, 0.5)
chartData[1].data = calculateMonthlySavings(accounts_info[0].standard_interest_rate, 12, savings, accounts_info[0].promotion_length, accounts_info[0].promotion_rate)

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
    categories: ['Today', '', '', '', '', '', '6 months','', '', '', '', '', '1 year']
  },
  yAxis: {
    title: {
      text: '',
    },
    min: savings
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
                    document.getElementById('difference-value').innerText = '$ ' + (series1Data[this.x] - series0Data[this.x]).toFixed((0));
                }
            }
        },
        events: {
            mouseOut: function () {
                document.getElementById('savings1-value').innerText = '$ ' + series0Data[12].toFixed((0));
                document.getElementById('savings2-value').innerText = '$ ' + series1Data[12].toFixed((0));
                document.getElementById('difference-value').innerText = '$ ' + (series1Data[12] - series0Data[12]).toFixed((0));
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
var savings_chart = Highcharts.chart('container-savings-calc', chartOptions);
setOriginalValues();
var current_product_index = 0;

// Add click event listeners to each button
var account_buttons = document.querySelectorAll('.account-btn');
account_buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove the active class from all buttons
    account_buttons.forEach(function(button) {
      button.classList.remove('active-primary');
    });

    // Retrieve the index of the clicked button
    current_product_index = this.getAttribute('data-index');

    // Add the active class to the clicked button
    this.classList.add('active-primary');

    // Retrieve the corresponding account information from the array
    var account = accounts_info[current_product_index];
    var data = calculateMonthlySavings(account.standard_interest_rate, 12, savings, account.promotion_length, account.initial_interest_rate);

    // Update the chart data with the new values
    savings_chart.series[1].update({
      name: account.name,
      data,
    });
    series1Data = data;
    document.getElementById('savings2-value').innerText = '$' + series1Data[12].toFixed((0));
    document.getElementById('difference-value').innerText = '$' + (series1Data[12] - series0Data[12]).toFixed((0));
  });
});

// Add click event for calculate button
var calcButton = document.getElementById("calculate-savings");
calcButton.addEventListener('click', function() {
  var interestRate = parseFloat(document.getElementById('interest_rate_input').value);
  savings = parseFloat(document.getElementById('initial_savings_input').value);
  
  var account = accounts_info[current_product_index];

  var data0 = calculateMonthlySavings(interestRate, 12, savings);
  var data1 = calculateMonthlySavings(account.standard_interest_rate, 12, savings, account.promotion_length, account.initial_interest_rate);

  savings_chart.series[0].update({
    name: 'Your Current Rates',
    data: data0,
  });

  savings_chart.series[1].update({
    name: 'New Product Rates',
    data: data1,
  });

  series0Data = data0;
  series1Data = data1;
  savings_chart.yAxis[0].setExtremes(savings, null);

  document.getElementById('savings1-value').innerText = '$ ' + series0Data[12].toFixed((0));
  document.getElementById('savings2-value').innerText = '$ ' + series1Data[12].toFixed((0));
  document.getElementById('difference-value').innerText = '$ ' + (series1Data[12] - series0Data[12]).toFixed((0));
});