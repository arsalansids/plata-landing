// Define the initial savings value
var savings = 10000;

// Define the data for the two series
var chartData = [  {    name: '0.01%',    data: []
  },
  {
    name: '0.05%',
    data: []
  }
];

// Fill in the data for the two series
// for (var i = 0; i < 12; i++) {
//   var monthSavings1 = savings * (1 + (0.0001 * (i + 1)));
//   var monthSavings2 = savings * (1 + (0.0005 * (i + 1)));
//   chartData[0].data.push(monthSavings1.toFixed(2));
//   chartData[1].data.push(monthSavings2.toFixed(2));
// }

// Fill in the data for the two series
var monthSavings1 = savings;
var monthSavings2 = savings;
for (var i = 0; i < 13; i++) {
    chartData[0].data.push(monthSavings1);
    chartData[1].data.push(monthSavings2);
    monthSavings1 = monthSavings1 * (1 + (0.01/12));
    monthSavings2 = monthSavings2 * (1 + (0.05/12));
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
    min: savings,
    // max: savings + 800, 
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
                    document.getElementById('savings1-value').innerText = '$ ' + chartData[0].data[this.x].toFixed((0));
                    document.getElementById('savings2-value').innerText = '$ ' + chartData[1].data[this.x].toFixed((0));
                }
            }
        },
        events: {
            mouseOut: function () {
                document.getElementById('savings1-value').innerText = '$ ' + chartData[0].data[12].toFixed((0));
                document.getElementById('savings2-value').innerText = '$ ' + chartData[1].data[12].toFixed((0));
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
    data: chartData[0].data,
    color: '#7CB6B7'
}, {
    // name: '0.05% interest rate',
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
Highcharts.chart('chart-container-savings', chartOptions);