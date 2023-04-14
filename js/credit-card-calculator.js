// Define the initial cash value
var monthlyAverageSpend = 4000;

function monthlyAverageSpendArray(monthlyAverageSpend) {
  return [
    monthlyAverageSpend * 0.09 * 12,
    monthlyAverageSpend * 0.04 * 12,
    monthlyAverageSpend * 0.07 * 12,
    monthlyAverageSpend * 0.04 * 12,
    monthlyAverageSpend * 0.06 * 12,
    monthlyAverageSpend * 0.06 * 12,
    monthlyAverageSpend * 0.09 * 12,
    monthlyAverageSpend * 0.08 * 12,
    monthlyAverageSpend * 0.11 * 12,
    monthlyAverageSpend * 0.09 * 12,
    monthlyAverageSpend * 0.13 * 12,
    monthlyAverageSpend * 0.14 * 12
  ];
}

var monthly_spend_array = monthlyAverageSpendArray(monthlyAverageSpend);

function calculateMonthlyCashback(monthly_avg_spend, cashback_rates, persona) {
  let monthly_cashback = 0;
  let categories = Object.keys(cashback_rates);
  categories.forEach((category) => {    
    monthly_cashback += cashback_rates[category] * monthly_avg_spend * persona[category];
  });

  // The monthly cashback is for a single month
  return monthly_cashback; 
};

function calculateCashbackAllMonths(
  monthly_spend_array, 
  standard_cashback_rates, 
  promotional_cashback_rates,
  promotional_reward_length,
  promotional_reward_limit,
  persona, 
  initial_annual_fee
) {
  let cashback = [];
  let cashback_rates;
  let total = 0 - initial_annual_fee;
  for (let i = 0; i < 12; i++) {
    if (promotional_reward_length > 0 && i < promotional_reward_length && promotional_reward_limit === null) {
      cashback_rates = promotional_cashback_rates;
    } else if (promotional_reward_limit !== null && i < promotional_reward_length) {
      // Assuming here that promotional reward limits always get used in their timeframe
      total = total + promotional_reward_limit/promotional_reward_length;
      cashback_rates = standard_cashback_rates;
    } else {
      cashback_rates = standard_cashback_rates;
    }
    total = total + calculateMonthlyCashback(monthly_spend_array[i], cashback_rates, persona);
    cashback.push(total);
  }
  return cashback;
}

function loadCardImage(cardUrl, bankName, cardName, position) {
  let img, bankLabel, cardLabel;
  if (position === 'primary') {
    img = document.getElementById('primary-img');
    bankLabel = document.getElementById('primary-label-bank');
    cardLabel = document.getElementById('primary-label-name');
  } else if (position === 'secondary') {
    img = document.getElementById('secondary-img');
    bankLabel = document.getElementById('secondary-label-bank');
    cardLabel = document.getElementById('secondary-label-name');
  }
  img.src = cardUrl;
  bankLabel.innerHTML = bankName;
  cardLabel.innerHTML = cardName;
}

const credit_card_info = [
      {
        "bank": "Scotiabank",
        "name": "Momentum Visa Infinite",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Scotia-Momentum-Visa-Infinite-Card.jpg",
        "referral_url": "https://www.scotiabank.com/ca/en/personal/credit-cards/visa/momentum-infinite-card.html",
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
        "promotional_reward_limit": 200, // in dollars of cashback
        "promotional_fee_length": 12,
        "annual_fee": 120,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "RBC",
        "name": "Cashback Preferred World Elite Mastercard",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/RBC-Cash-Back-Preferred-World-Elite-Mastercard1.png",
        "referral_url": "https://apps.royalbank.com/uaw0/IAO/apply/cardapp?pid1=cashback_pref&ASC=3D0005&_gl=1*x34p88*_ga*MTUzNjQxMTM2MC4xNjgxMjM3NDQ1*_ga_89NPCTDXQR*MTY4MTIzNzQ0NC4xLjAuMTY4MTIzNzQ0NC42MC4wLjA.&_ga=2.33705889.1287853094.1681237445-1536411360.1681237445#!/main/intro",
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
        "referral_url": "https://www.bmo.com/main/personal/credit-cards/2-cashback-offers/?ecid=ps-US33262CC4-SJBMO17&&utm_source=Google_Paid_Search&utm_medium=Retail-Credit-Cards&utm_campaign=Brand_EN&utm_term=bmo%20cashback%20mastercard&gclid=CjwKCAjwitShBhA6EiwAq3RqAw2IOCmHrdgkHzieogvAlNU4rSu7V9Pbk2LbWyup1zqmZK1-ZvE_hRoCIEoQAvD_BwE&gclsrc=aw.ds",
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
        "referral_url": "https://www.americanexpress.com/ca/en/credit-cards/simply-cash-preferred/",
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
        "referral_url": "https://www.simplii.com/en/credit-cards/cash-back-visa.html",
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
        "promotional_reward_limit": 50, // in dollars of cashback earned
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "Tangerine",
        "name": "Money-Back Credit Card",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/Tangerine-Money-Back-Credit-Card.png",
        "referral_url": "https://www.tangerine.ca/en/products/spending/creditcard/money-back",
        "standard_cashback_rates": { //pull rates from the tangerine function
          "gas": 0,
          "groceries": 0,
          "entertainment": 0,
          "travel": 0,
          "other": 0
        },
        "promotional_cashback_rates": {
          "gas": 0.1,
          "groceries": 0.1,
          "entertainment": 0.1,
          "travel": 0.1,
          "other": 0.1
        },
        "promotional_reward_length": 2,
        "promotional_reward_limit": 100, // in dollars
        "promotional_fee_length": 0,
        "annual_fee": 0,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "TD",
        "name": "First Class Travel Visa Infinite",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2022/01/TD-First-Class-Travel-Visa-Infinite-e1667145706354.png",
        "referral_url": "https://www.td.com/ca/en/personal-banking/products/credit-cards/travel-rewards/first-class-travel-visa-infinite-card",
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
        "promotional_reward_limit": null, // in dollars
        "promotional_fee_length": 12,
        "annual_fee": 139,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      },
      {
        "bank": "TD",
        "name": "Aeroplan Visa Infinite Card",
        "image": "https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2022/04/TD-Aeroplan-Visa-Infinite-Card.jpeg",
        "referral_url": "https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-card",
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
        "promotional_reward_limit": null, // in dollars
        "promotional_fee_length": 12,
        "annual_fee": 139,
        "promotional_annual_fee": 0,
        "promotional_bonus": 0 // in dollars
      }
];

// Tangerine card lets you select categories, so we make assumptions with average category spend here
const tangerinePersonasStandardRates = {
  "average": { 
      "gas": 0.005,
      "groceries": 0.02,
      "entertainment": 0.005,
      "travel": 0.005,
      "other": 0.008
    },
  "gas": {
    "gas": 0.02,
    "groceries": 0.02,
    "entertainment": 0.005,
    "travel": 0.005,
    "other": 0.005
  },
  "groceries": {
    "gas": 0.1,
    "groceries": 0.1,
    "entertainment": 0.1,
    "travel": 0.1,
    "other": 0.1
  },
  "entertainment": {
    "gas": 0.005,
    "groceries": 0.02,
    "entertainment": 0.01,
    "travel": 0.005,
    "other": 0.005
  },
  "travel": {
    "gas": 0.005,
    "groceries": 0.02,
    "entertainment": 0.005,
    "travel": 0.005,
    "other": 0.008
  },
  "other": {
    "gas": 0.005,
    "groceries": 0.005,
    "entertainment": 0.005,
    "travel": 0.005,
    "other": 0.011
  }
}

function stardardRates(card, persona) {
  if (card.bank === "Tangerine") {
    return tangerinePersonasStandardRates[persona];
  } else {
    return [card.standard_cashback_rates];
  }
}

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

var primary_card_index  = 0;
var secondary_card_index  = 1;

// Load Cards onto list
const bankProductsList = document.getElementById('credit-card-products-list');
credit_card_info.forEach((product, index) => {
  let item = document.createElement('a');
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
document.querySelector('button[data-index="0"]').classList.add('active-primary');
document.querySelector('button[data-index="1"]').classList.add('active-secondary');

// Define the data for the two series
var chartData = [  {    
    name: credit_card_info[primary_card_index].bank + ':' + credit_card_info[primary_card_index].name,
    data: []
  },
  {
    name: credit_card_info[secondary_card_index].bank + ':' + credit_card_info[secondary_card_index].name,
    data: []
  }
];

var monthlyCashbackPrimary = calculateCashbackAllMonths(
  monthly_spend_array,
  credit_card_info[primary_card_index].standard_cashback_rates,
  credit_card_info[primary_card_index].promotional_cashback_rates,
  credit_card_info[primary_card_index].promotional_reward_length,
  credit_card_info[primary_card_index].promotional_reward_limit,
  personas['average'],
  credit_card_info[primary_card_index].promotional_annual_fee,
);
var monthlyCashbackSecondary = calculateCashbackAllMonths(
  monthly_spend_array, 
  credit_card_info[secondary_card_index].standard_cashback_rates,
  credit_card_info[secondary_card_index].promotional_cashback_rates,
  credit_card_info[secondary_card_index].promotional_reward_length,
  credit_card_info[secondary_card_index].promotional_reward_limit,
  personas['average'],
  credit_card_info[secondary_card_index].promotional_annual_fee,
);

chartData[0].data = monthlyCashbackPrimary;
chartData[1].data = monthlyCashbackSecondary;

// Chart Numbers that update with mouse
var series0Data = chartData[0].data;
var series1Data = chartData[1].data;
loadCardImage(
  credit_card_info[primary_card_index].image, 
  credit_card_info[primary_card_index].bank, 
  credit_card_info[primary_card_index].name, 
  'primary'
  );
  loadCardImage(
    credit_card_info[secondary_card_index].image, 
    credit_card_info[secondary_card_index].bank, 
    credit_card_info[secondary_card_index].name, 
    'secondary'
    );
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
    // min: 0,
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
                    document.getElementById('cash-value-1').innerText = '$ ' + series0Data[this.x].toFixed((0));
                    document.getElementById('cash-value-2').innerText = '$ ' + series1Data[this.x].toFixed((0));
                    document.getElementById('difference-value').innerText = '$' + Math.abs((series0Data[this.x] - series1Data[this.x]).toFixed((0)));
                }
            }
        },
        events: {
            mouseOut: function () {
                document.getElementById('cash-value-1').innerText = '$ ' + series0Data[series0Data.length - 1].toFixed((0));
                document.getElementById('cash-value-2').innerText = '$ ' + series1Data[series1Data.length - 1].toFixed((0));
                document.getElementById('difference-value').innerText = '$' + Math.abs((series0Data[series0Data.length - 1] - series1Data[series1Data.length - 1]).toFixed((0)));
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
  },
  {
    data: chartData[1].data,
    color: '#7CB6B7'
  }
  ],
  credits: {
    enabled: false
    },
    tooltip: {
        enabled: false
    }
};

// Create the chart
var cash_value_chart = Highcharts.chart('container-credit-card-calc', chartOptions);

function setSummaryValues() {
  let primary = monthlyCashbackPrimary.length > 0 ? monthlyCashbackPrimary[monthlyCashbackPrimary.length - 1].toFixed((0)) : 0;
  let secondary = monthlyCashbackSecondary.length > 0 ? monthlyCashbackSecondary[monthlyCashbackSecondary.length - 1].toFixed((0)) : 0;
  document.getElementById('cash-value-1').innerText = '$' + primary;
  document.getElementById('cash-value-2').innerText = '$' + secondary;
  document.getElementById('difference-value').innerText = '$' + Math.abs((primary - secondary).toFixed((0)));
}

setSummaryValues();

// set original persona
let persona = 'average';
let currentCircle = document.querySelector('#average_corner');;
currentCircle.setAttribute('fill', '#FAB131');
currentCircle.setAttribute('r', '15');

// Add click event listeners to each card button
var card_buttons = document.querySelectorAll('.card-btn');
card_buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let clicked_index = this.getAttribute('data-index');

    if (clicked_index == primary_card_index) { 
      primary_card_index = null; 
      monthlyCashbackPrimary = [];
      cash_value_chart.series[0].update({
        name: 'No card picked',
        data: monthlyCashbackPrimary,
      });
      button.classList.remove('active-primary');
      loadCardImage('', '', '', 'primary');
      setSummaryValues();
      return;
    }
    if (clicked_index == secondary_card_index) { 
      secondary_card_index = null; 
      monthlyCashbackSecondary = [];
      cash_value_chart.series[1].update({
        name: 'No card picked',
        data: monthlyCashbackSecondary,
      });
      button.classList.remove('active-secondary');
      loadCardImage('', '', '', 'secondary');
      setSummaryValues();
      return;
    }
    if (secondary_card_index == null) {
      secondary_card_index = clicked_index;
      this.classList.add('active-secondary');

      let card = credit_card_info[secondary_card_index];
      let standardRates = standardRates(card, persona);
      monthlyCashbackSecondary = calculateCashbackAllMonths(
        monthly_spend_array, 
        standardRates, 
        card.promotional_cashback_rates,
        card.promotional_reward_length,
        card.promotional_reward_limit,
        personas[persona],
        card.promotional_annual_fee
      );
      series1Data = monthlyCashbackSecondary;
      cash_value_chart.series[1].update({
        name: card.name,
        data: monthlyCashbackSecondary,
      });
      loadCardImage(card.image, card.bank, card.name, 'secondary');
      setSummaryValues();
    } else {
      // Remove the active class from all buttons
      card_buttons.forEach(function(button) {
        button.classList.remove('active-primary');
      });

      // Retrieve the index of the clicked button
      primary_card_index = clicked_index;

      // Add the active class to the clicked button
      this.classList.add('active-primary');

      // Retrieve the corresponding card information from the array
      let card = credit_card_info[primary_card_index];
      let standardRates = standardRates(card, persona);
      monthlyCashbackPrimary = calculateCashbackAllMonths(
        monthly_spend_array, 
        standardRates,
        card.promotional_cashback_rates,
        card.promotional_reward_length,
        card.promotional_reward_limit,
        personas[persona],
        card.promotional_annual_fee
      );
      series0Data = monthlyCashbackPrimary;
      // Update the chart data with the new values
      cash_value_chart.series[0].update({
        name: card.name,
        data: monthlyCashbackPrimary,
      });
      loadCardImage(card.image, card.bank, card.name, 'primary');
      setSummaryValues();
    }
  });
});


// Add event listeners to the pentagon circles
const circles = document.querySelectorAll('circle');
circles.forEach(circle => {
  circle.addEventListener('click', function() {
    if (currentCircle) {
      currentCircle.setAttribute('fill', 'black');
      currentCircle.setAttribute('r', '10');
    }
    currentCircle = circle;
    currentCircle.setAttribute('fill', '#FAB131');
    currentCircle.setAttribute('r', '15');
    
    if (circle.getAttribute('id') === 'groceries_corner') {
      persona = 'groceries';
    } else if (circle.getAttribute('id') === 'travel_corner') {
      persona = 'travel';
    } else if (circle.getAttribute('id') === 'gas_corner') {
      persona = 'gas';
    } else if (circle.getAttribute('id') === 'entertainment_corner') {
      persona = 'entertainment';
    } else if (circle.getAttribute('id') === 'other_corner') {
      persona = 'other';
    } else if (circle.getAttribute('id') === 'average_corner') {
      persona = 'average';
    };

    if (primary_card_index != null) {
      let standardRates = standardRates(credit_card_info[primary_card_index], persona);
      monthlyCashbackPrimary = calculateCashbackAllMonths(
        monthly_spend_array, 
        standardRates, 
        credit_card_info[primary_card_index].promotional_cashback_rates,
        credit_card_info[primary_card_index].promotional_reward_length,
        credit_card_info[primary_card_index].promotional_reward_limit, 
        personas[persona],
        credit_card_info[primary_card_index].promotional_annual_fee
      );
      cash_value_chart.series[0].update({
        name: credit_card_info[primary_card_index].bank + ' ' + credit_card_info[primary_card_index].name,
        data: monthlyCashbackPrimary,
      });
    }
    if (secondary_card_index != null) {
      let standardRates = standardRates(credit_card_info[secondary_card_index], persona);
      monthlyCashbackSecondary = calculateCashbackAllMonths(
        monthly_spend_array, 
        standardRates,
        credit_card_info[secondary_card_index].promotional_cashback_rates,
        credit_card_info[secondary_card_index].promotional_reward_length,
        credit_card_info[secondary_card_index].promotional_reward_limit,
        personas[persona],
        credit_card_info[secondary_card_index].promotional_annual_fee
      );
      cash_value_chart.series[1].update({
        name: credit_card_info[secondary_card_index].bank + ' ' + credit_card_info[secondary_card_index].name,
        data: monthlyCashbackSecondary,
      });
    }
    setSummaryValues();
  });
});

var range = document.querySelector('.input-range');
var value = document.querySelector('.range-value');
    
value.innerText = '$' + range.value;
range.addEventListener('input', function(){
  monthly_spend_array = monthlyAverageSpendArray(this.value);
  value.innerText = '$' + this.value;
  // document.getElementById("gas_corner").click();
});