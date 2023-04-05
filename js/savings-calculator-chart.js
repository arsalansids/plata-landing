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