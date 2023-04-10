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
      },
      {
        "bank": "BMO",
        "name": "Cashback Mastercard",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/10/Student-BMO-CashBack-Mastercard.png",
        "standard_cashback_rates": {
          "gas": 0.005,
          "groceries": 0.03,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.006
        },
        "promotional_cashback_rates": {
          "gas": 0.05,
          "groceries": 0.05,
          "entertainment": 0.05,
          "travel": 0.05,
          "other": 0.05
        },
        "promotional_reward_length": 3,
        "promotional_reward_limit": null, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "American Express",
        "name": "SimplyCash Preferred Card",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2022/01/Amex-SimplyCash-Preferred.png",
        "standard_cashback_rates": {
          "gas": 0.04,
          "groceries": 0.04,
          "entertainment": 0.02,
          "travel": 0.02,
          "other": 0.02
        },
        "promotional_cashback_rates": {
          "gas": 0.04,
          "groceries": 0.04,
          "entertainment": 0.02,
          "travel": 0.02,
          "other": 0.02
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": null, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 119.88,
        "promotional_annual_fee": 119.88,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Simplii Financial",
        "name": "Cash Back Visa Card",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Simplii-Financial-Cash-Back-Visa-Card.svg",
        "standard_cashback_rates": {
          "gas": 0.015,
          "groceries": 0.015,
          "entertainment": 0.0225,
          "travel": 0.005,
          "other": 0.007
        },
        "promotional_cashback_rates": {
          "gas": 0.015,
          "groceries": 0.015,
          "entertainment": 0.0525,
          "travel": 0.005,
          "other": 0.007
        },
        "promotional_reward_length": 4,
        "promotional_reward_limit": 500, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Tangerine",
        "name": "Money-Back Credit Card (AVG)",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Tangerine-Money-Back-Credit-Card.png",
        "standard_cashback_rates": { //these rates are overall averages which is not correct
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.008
        },
        "promotional_cashback_rates": {
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.008
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Tangerine",
        "name": "Money-Back Credit Card (GAS)",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Tangerine-Money-Back-Credit-Card.png",
        "standard_cashback_rates": { //these rates are overall averages which is not correct
          "gas": 0.02,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.005
        },
        "promotional_cashback_rates": {
          "gas": 0.02,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.005
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Tangerine",
        "name": "Money-Back Credit Card (GROCERIES)",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Tangerine-Money-Back-Credit-Card.png",
        "standard_cashback_rates": { //these rates are overall averages which is not correct
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.008
        },
        "promotional_cashback_rates": {
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.008
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Tangerine",
        "name": "Money-Back Credit Card (ENTERTAINMENT)",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Tangerine-Money-Back-Credit-Card.png",
        "standard_cashback_rates": { //these rates are overall averages which is not correct
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.02,
          "travel": 0.005,
          "other": 0.005
        },
        "promotional_cashback_rates": {
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.02,
          "travel": 0.005,
          "other": 0.005
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Tangerine",
        "name": "Money-Back Credit Card (TRAVEL)",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Tangerine-Money-Back-Credit-Card.png",
        "standard_cashback_rates": { //these rates are overall averages which is not correct
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.008
        },
        "promotional_cashback_rates": {
          "gas": 0.005,
          "groceries": 0.02,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.008
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Tangerine",
        "name": "Money-Back Credit Card (OTHER)",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Tangerine-Money-Back-Credit-Card.png",
        "standard_cashback_rates": { //these rates are overall averages which is not correct
          "gas": 0.005,
          "groceries": 0.005,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.011
        },
        "promotional_cashback_rates": {
          "gas": 0.005,
          "groceries": 0.005,
          "entertainment": 0.005,
          "travel": 0.005,
          "other": 0.011
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "TD",
        "name": "First Class Travel Visa Infinite",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2022/01/TD-First-Class-Travel-Visa-Infinite-e1667145706354.png",
        "standard_cashback_rates": { //need to add note about how the points have limited redeem usage
          "gas": 0.01,
          "groceries": 0.03,
          "entertainment": 0.02,
          "travel": 0.04,
          "other": 0.012
        },
        "promotional_cashback_rates": {
          "gas": 0.01,
          "groceries": 0.03,
          "entertainment": 0.02,
          "travel": 0.04,
          "other": 0.012
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 12,
        "annual_fee": 139,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "TD",
        "name": "Aeroplan Visa Infinite Card",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2022/04/TD-Aeroplan-Visa-Infinite-Card.jpeg",
        "standard_cashback_rates": { //need to add note about how the points have limited redeem usage
          "gas": 0.0223,
          "groceries": 0.0223,
          "entertainment": 0.0223,
          "travel": 0.03345,
          "other": 0.0223
        },
        "promotional_cashback_rates": {
          "gas": 0.0223,
          "groceries": 0.0223,
          "entertainment": 0.0223,
          "travel": 0.03345,
          "other": 0.0223
        },
        "promotional_reward_length": 0,
        "promotional_reward_limit": 0, // in dollars
        "promotional_fee_length": 12,
        "annual_fee": 139,
        "promotional_annual_fee": 0,
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

// Add click event listeners to each card button
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
    document.getElementById('cash-value').innerText = '$ ' + totalCashback(data).toFixed((0));
  });
});

let persona = '';
let currentCircle = null;

// Add event listeners to the pentagon circles
const zones = document.querySelectorAll('g[id^="zone"]');
zones.forEach(zone => {
  zone.addEventListener('click', () => {
    if (currentCircle) {
      currentCircle.setAttribute('fill', 'black');
      currentCircle.setAttribute('r', '10');
    }
    currentCircle = circle;
    currentCircle.setAttribute('fill', '#FAB131');
    currentCircle.setAttribute('r', '15');
    if (circle.getAttribute('id') === 'grocery_corner') {
      persona = 'groceries';
    } else if (circle.getAttribute('id') === 'travel_corner') {
      persona = 'travel';
    } else if (circle.getAttribute('id') === 'auto_corner') {
      persona = 'gas';
    } else if (circle.getAttribute('id') === 'entertainment_corner') {
      persona = 'entertainment';
    } else if (circle.getAttribute('id') === 'other_corner') {
      persona = 'other';
    }

    monthly_cashback = calculateCashbackAllMonths(spend, credit_card_info[current_card_index].standard_cashback_rates, personas[persona]);
    total = totalCashback(monthly_cashback);
    cash_value_chart.series[0].update({
      name: credit_card_info[current_card_index].bank + ' ' + credit_card_info[current_card_index].name,
      data: monthly_cashback,
    });
    document.getElementById('cash-value').innerText = '$ ' + totalCashback(monthly_cashback).toFixed((0));
  });
});