var cashback = 10000;

// Define the data for the two series
var chartCreditData = [  {    name: '0.01%',    data: []
  },
  {
    name: '0.05%',
    data: []
  }
];

// Fill in the data for the two series
var monthCashback1 = cashback;
var monthCashback2 = cashback;
for (var i = 0; i < 13; i++) {
    chartCreditData[0].data.push(monthCashback1);
    chartCreditData[1].data.push(monthCashback2);
    monthCashback1 = monthCashback1 * (1 + (0.01/12));
    monthCashback2 = monthCashback2 * (1 + (0.05/12));
}


// Define the options for the chart
var chartOptions = {
  chart: {
    type: 'areaspline',
    height: 200,
    backgroundColor: '#0c3226',
  },
  events: {
    mouseOver: function () {
        var savingsValue = this.y.toFixed(0);
        document.getElementById('testp').innerText = savingsValue;
    }
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
    min: cashback,
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
                    document.getElementById('credit1-value').innerText = '$ ' + chartCreditData[0].data[this.x].toFixed((0));
                    document.getElementById('credit2-value').innerText = '$ ' + chartCreditData[1].data[this.x].toFixed((0));
                }
            }
        },
        events: {
            mouseOut: function () {
                document.getElementById('credit1-value').innerText = '$ ' + chartCreditData[0].data[12].toFixed((0));
                document.getElementById('credit2-value').innerText = '$ ' + chartCreditData[1].data[12].toFixed((0));
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
    // name: '0.01% interest rate',
    data: chartCreditData[0].data,
    color: '#7CB6B7'
}, {
    // name: '0.05% interest rate',
    data: chartCreditData[1].data,
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
Highcharts.chart('chart-container-credit', chartOptions);