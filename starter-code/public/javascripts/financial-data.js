// const restFinanceApi = axios.create({
//   baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json'
// });
var ctx = document.getElementById('myChart').getContext('2d');

function getCurrencyInfo() {

  var data1 = document.getElementById("data1").value;
  var data2 = document.getElementById("data2").value;

   
  var url  =  data2 ?`http://api.coindesk.com/v1/bpi/historical/close.json?start=${data1}&end=${data2}`:`http://api.coindesk.com/v1/bpi/historical/close.json`;


  axios.get(url)
    .then(responseFromAPI => {
      console.log('Response from API is: ', responseFromAPI.data.bpi);
      var key = Object.keys(responseFromAPI.data.bpi)
      var value = Object.values(responseFromAPI.data.bpi)

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: key,
          datasets: [{
            label: 'Bitcoin Price Index',
            data: value,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          }
        }
      });
    })


    .catch(err => {
      console.log('Error is: ', err);
    })
}

getCurrencyInfo();

