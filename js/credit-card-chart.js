// Define the data for the two series
var chartCreditData = [  
  {    
    name: 'Current Card',    
    data: [ 5.20, 11.09, 4.23, 2.58, 1.94, 15.21, 13.76, 12.98, 8.09, 9.23, 11.24, 15.23 ]
  },
  {
    name: 'New Card',
    data: [ 25.48, 55.09, 40.43, 25.18, 13.84, 97.28, 53.56, 34.16, 34.48, 42.46, 34.75, 48.99 ]
  }
];



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