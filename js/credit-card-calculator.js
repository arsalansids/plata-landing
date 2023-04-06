function calculateMonthlyCashback(monthly_avg_spend, cashback_rates, persona) {
  var monthly_cashback = 0;
  let categories = Object.keys(cashback_rates);
  categories.forEach((category) => {
    monthly_cashback += cashback_rates[category] * monthly_avg_spend * persona[category];
  });

  // The monthly cashback is for a single month
  return monthly_cashback; 
};

function calculateCashbackAllMonths(monthly_avg_spend, cashback_rates, persona) {
  var cashback = [];
  for (let i = 0; i < 12; i++) {
    cashback.push(calculateMonthlyCashback(monthly_avg_spend, cashback_rates, persona));
  }
  return cashback;
}

function totalCashback(array_cashback) {
  var total = 0;
  array_cashback.forEach((cashback) => {
    total += cashback;
  });
  return total;
}

const credit_card_info = [
      {
        "bank": "Scotiabank",
        "name": "Momentum Visa Infinite",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Scotia-Momentum-Visa-Infinite-Card.jpg",
        "standard_cashback_rates": {
          "gas": 0.02,
          "groceries": 0.04,
          "entertainment": 0.01,
          "travel": 0.01,
          "other": 0.018
        },
        "promotional_cashback_rates": {
          "gas": 0.10,
          "groceries": 0.10,
          "entertainment": 0.10,
          "travel": 0.10,
          "other": 0.10
        },
        "promotional_reward_length": 3,
        "promotional_reward_limit": 2000, // in dollars
        "promotional_fee_length": 12,
        "annual_fee": 120,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "RBC",
        "name": "Cashback Preferred World Elite Mastercard",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/RBC-Cash-Back-Preferred-World-Elite-Mastercard1.png",
        "standard_cashback_rates": {
          "gas": 0.015,
          "groceries": 0.015,
          "entertainment": 0.015,
          "travel": 0.015,
          "other": 0.015
        },
        "promotional_cashback_rates": {
          "gas": 0.015,
          "groceries": 0.015,
          "entertainment": 0.015,
          "travel": 0.015,
          "other": 0.015
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": null, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 99,
        "promotional_annual_fee": 99,
        "promotional_bonus": 0 // in dollars
      }
    ];
  
const personas = 
  {
    "average": {
      "gas": 0.072,
      "groceries": 0.115,
      "entertainment": 0.127,
      "travel": 0.157,
      "other": 0.529
    },
    "gas": {
      "gas": 0.171,
      "groceries": 0.103,
      "entertainment": 0.113,
      "travel": 0.14,
      "other": 0.473
    },
    "groceries": {
      "gas": 0.069,
      "groceries": 0.162,
      "entertainment": 0.12,
      "travel": 0.148,
      "other": 0.501
    },
    "entertainment": {
      "gas": 0.066,
      "groceries": 0.105,
      "entertainment": 0.201,
      "travel": 0.143,
      "other": 0.484
    },
    "travel": {
      "gas": 0.071,
      "groceries": 0.113,
      "entertainment": 0.125,
      "travel": 0.17,
      "other": 0.521
    },
    "other": {
      "gas": 0.058,
      "groceries": 0.092,
      "entertainment": 0.101,
      "travel": 0.125,
      "other": 0.624
    },
  };

var current_card_index  = 0;
// Load Cards onto list
 const bankProductsList = document.getElementById('credit-card-products-list');
      credit_card_info.forEach((product, index) => {
        var item = document.createElement('a');
        item.classList.add('list-group-item', 'list-group-item-action');
        item.innerHTML = `<button style="width:100%" data-index=${index} class="mb-1 card-btn block">
          <div class="col-lg-3 col-md-3" col-sm-3">
            <img src=${product.image} alt="buttonpng" height=40px />
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9">
          ${product.bank} <br> ${product.name} </button> 
          </div>`;
        bankProductsList.appendChild(item);
      });


// Define the data for the two series
var chartData = [  {    
    name: credit_card_info[current_card_index].bank + ':' + credit_card_info[current_card_index].name,
    data: []
  }
];

// Define the initial cash value
var spend = 4000;
var monthly_cashback = calculateCashbackAllMonths(spend, credit_card_info[current_card_index].standard_cashback_rates, personas['average']);
chartData[0].data = monthly_cashback;
var total = totalCashback(monthly_cashback);

// Chart Numbers that update with mouse
var series0Data = chartData[0].data;

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
    min: 0,
    // visible: false
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
        point: {
            events: {
                mouseOver: function () {
                    document.getElementById('cash-value').innerText = '$ ' + series0Data[this.x].toFixed((0));
                }
            }
        },
        events: {
            mouseOut: function () {
                document.getElementById('cash-value').innerText = '$ ' + total.toFixed((0));
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
var cash_value_chart = Highcharts.chart('container-credit-card-calc', chartOptions);

// Add click event listeners to each button
var card_buttons = document.querySelectorAll('.card-btn');
card_buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Retrieve the index of the clicked button
    current_card_index = this.getAttribute('data-index');

    // Retrieve the corresponding card information from the array
    var card = credit_card_info[current_card_index];
    var data = calculateCashbackAllMonths(spend, card.standard_cashback_rates, personas['average']);

    // Update the chart data with the new values
    cash_value_chart.series[0].update({
      name: card.name,
      data,
    });
    series1Data = data;
    document.getElementById('cash-value').innerText = '$ ' + totalCashback(data).toFixed((0));
  });
});