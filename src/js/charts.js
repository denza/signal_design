// Import ApexCharts
import ApexCharts from 'apexcharts';
import $ from 'jquery';
import 'regenerator-runtime/runtime';

const realTime = 0;
const dayAvg = 1;
const weekAvgPerDay = 2;
const weekAvgPerHour = 3;

let chart_global_options = {
  chart: {
    type: 'line',
    width: '100%',
    height: 180,
    foreColor: '#cdcee4',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    stacked: false,
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  colors: ['#1F6EAE'],
  stroke: {
    curve: 'straight',
    width: 3,
  },
  dataLabels: {
    enabled: false,
    background: {
      enabled: true,
      foreColor: '#fff',
      padding: 5,
      borderRadius: 2,
      borderWidth: 0,
      borderColor: '#fff',
      opacity: 0.9,
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: '#000',
        opacity: 0.45,
      },
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    tickAmount: 5,
    labels: {
      "formatter": function (val) {
          return val.toFixed(2)
      }
  }
  },
  fill: {
    type: 'gradient',
    gradient: {
      enabled: false,
      type: 'vertical',
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
      colorStops: [
        {
          offset: 0,
          color: '#C82333',
          opacity: 1,
        },
        {
          offset: 20,
          color: '#C82333',
          opacity: 0.5,
        },
        {
          offset: 60,
          color: '#1f6eae',
          opacity: 0.7,
        },
        {
          offset: 100,
          color: '#1f6eae',
          opacity: 1,
        },
      ],
    },
  },
  grid: {
    borderColor: '#cdcee4',
    strokeDashArray: 5,
    clipMarkers: true,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    size: 5,
    colors: ['#fff'],
    strokeColor: '#1f6eae',
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
    followCursor: true,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return (
        '<div class="gi_value_tooltip">' +
        '<span>' +
        series[seriesIndex][dataPointIndex].toFixed(2) +
        ' </span></div>'
      )
    },
  },
  noData: {
    text: 'Loading...',
    align: 'center',
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
    style: {
      color: '#000000',
      fontSize: '14px',
      fontFamily: 'Helvetica',
    },
  },
}
Object.assign(Apex, chart_global_options)

function newGraph(chartConfig, dataValues) {
  let graph
  if (chartConfig.type === realTime) { 
    graph = {
      chart: {
        id: 'device' +chartConfig.device,
        group: '',
        type: 'line',
      },
      series: [
        {
          name: 'Temperature',
          data: dataValues,
        },
      ],
      annotations: {
        points: [],
      },
      xaxis: {
        labels: {
          show: chartConfig.showLabels,
        },
      },
      markers: {
        size: 0,
      },
    }
  } else if (chartConfig.type === dayAvg) {
    graph = {
      chart: {
        id: 'device-day-avg-' +chartConfig.device,
        type: 'line',
      },
      series: [
        {
          name: 'Temperature',
          data: [...dataValues],
        },
      ],
      annotations: {
        points: [],
      },
      xaxis: {
        labels: {
          show: chartConfig.showLabels,
        },
      },
    }
  } else if (chartConfig.type === weekAvgPerDay) {
    graph = {
      chart: {
        id: 'device-week-avg-' +chartConfig.device,
        type: 'line',
      },
      series: [
        {
          name: 'Temperature',
          data: [...dataValues],
        },
      ],
      annotations: {
        points: [],
      },
      xaxis: {
        labels: {
          show: chartConfig.showLabels,
        },
      },
    }
  } else if (chartConfig.type === weekAvgPerHour) {
    graph = {
      chart: {
        id: 'device-week-avg-per-hour' +chartConfig.device,
        type: 'line',
      },
      series: [
        {
          name: 'Temperature',
          data: [...dataValues],
        },
      ],
      annotations: {
        points: [],
      },
      xaxis: {
        labels: {
          show: chartConfig.showLabels,
        },
      },
    }
  }

  return graph
}

async function delay(ms) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function chartListener(chartConfig){
  let chartSettings = await chartInit(chartConfig);
  await delay(1000);
  
  while (true) {
      chartSettings = await getDataFeed(chartConfig, chartSettings);
      await delay(1000);
  }
}

async function chartInit(chartConfig) {
  let settingsData = {
      "url": chartConfig.url,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer " + chartConfig.token,
      },
  };
  let myChart;
  let lastTimeStamp;
  let dataValues = [];
  let min, max;
  
  await $.ajax(settingsData).done(function (response) {
        response.forEach( element => {
            lastTimeStamp = element["TimeStamp"];
            if (chartConfig.type != realTime){
              dataValues.push({x : lastTimeStamp ,y: element["Value"] });
            } else {
              dataValues.push(element["Value"] );
            }
            
            let current_number = Number.parseFloat(element["Value"]);
            if (current_number < min || min === undefined) {
              min = Number.parseFloat(current_number).toFixed(2);
            }
            if (current_number > max || max === undefined) {
              max = Number.parseFloat(current_number).toFixed(2);
            }
        });

        let graph = newGraph(chartConfig, dataValues)
        

        if (chartConfig.type === realTime) {
          myChart = new ApexCharts(document.querySelector('#device'+chartConfig.device), graph)
          $(".current-temp" + chartConfig.device).text(Number.parseFloat(dataValues.at(-1)).toFixed(2).toString() + "°C")
          $(".min-temp-" + chartConfig.device).text(min);
          $(".max-temp-" + chartConfig.device).text(max);
          myChart.render()
        } else if (chartConfig.type === dayAvg) {
          myChart = new ApexCharts(document.querySelector('#day-avg-'+chartConfig.device), graph)
          myChart.render()
          $(".min-temp-day-avg-" + chartConfig.device).text(min);
          $(".max-temp-day-avg-" + chartConfig.device).text(max);
        } else if (chartConfig.type === weekAvgPerDay) {
          myChart = new ApexCharts(document.querySelector('#week-avg-per-day-'+chartConfig.device), graph)
          myChart.render()
          $(".min-temp-week-avg-per-day-" + chartConfig.device).text(min);
          $(".max-temp-week-avg-per-day-" + chartConfig.device).text(max);
        } else if (chartConfig.type === weekAvgPerHour) {
          myChart = new ApexCharts(document.querySelector('#week-avg-per-hour-'+chartConfig.device), graph)
          myChart.render()
          $(".min-temp-week-avg-per-hour-" + chartConfig.device).text(min);
          $(".max-temp-week-avg-per-hour-" + chartConfig.device).text(max);
        }

    });
  return {myChart, lastTimeStamp, dataValues, min, max}
}


async function getDataFeed(chartConfig, chartSettings){
  let url = window.conf.api_url + "company/" + chartConfig.scope + "/device/" + chartConfig.device + "/data/feed?timestamp=" + chartSettings.lastTimeStamp
  var settingsFeed = {
      "url": url,
      "method": "GET",
      "timeout": 0,
      "headers": {
      "Authorization": "Bearer " + chartConfig.token,
      },
  };
  await $.ajax(settingsFeed).done(function (response) {
      if (response.length > 0) {
          let dataValues = [];
          response.forEach( element => {
              chartSettings.lastTimeStamp = element["TimeStamp"];
              dataValues.push(element["Value"]);
              
          });
          let oldData = chartSettings.dataValues.slice(dataValues.length);
          let data = [...oldData, ...dataValues];
          chartSettings.myChart.updateSeries([{data:[...data]}]);
          chartSettings.dataValues = data;

          let max = Number.parseFloat(Math.max.apply(Math, data)).toFixed(2);
          let min = Number.parseFloat(Math.min.apply(Math, data)).toFixed(2);

          
          if (max > chartSettings.max) { 
            $(".max-temp-" + chartConfig.device).text(max);
            chartSettings.max = max
          }
          if (min < chartSettings.max){
            $(".min-temp-" + chartConfig.device).text(min);
            chartSettings.min = min
          }

          $(".current-temp-" + chartConfig.device).text(Number.parseFloat(data.at(-1)).toFixed(2).toString() + "°C")
      }                
  });
  return chartSettings
}

(function () {
  
  let token = getCookie("AuthBearer");
  
  if ((document.querySelector('.real-time-chart') != null)) {
      $(".real-time-chart").each( function (index, element) {
          let scope = $(element).attr("data-scope");
          let device = $(element).attr("data-device");
          let url = window.conf.api_url + "company/" + scope + "/device/" + device + "/data/list";

          let chartConfig = {
              scope,
              device,
              token,
              url,
              showLabels: false,
              type: realTime,
          };

          chartListener(chartConfig);
      });
  }

  if ((document.querySelector('.report-line-chart-dayavg') != null)) {
      $(".report-line-chart-dayavg").each( function (index, element) {
          let scope = $(element).attr("data-scope");
          let device = $(element).attr("data-device");
          let url = window.conf.api_url + "company/" + scope + "/device/" + device + "/data/dayavg";

          let chartConfig = {
              scope,
              device,
              token,
              url,
              showLabels: true,
              type: dayAvg,
          };
          
          chartInit(chartConfig);
      });
  }

  $(".mt_tab").on("click", function(){
    

    let divId = $(this).attr("data-target");
    

    if( $("#"+divId).is(':empty')){
      let div = $("#"+divId)
      let scope = $(div).attr("data-scope");
      let device = $(div).attr("data-device");
      let url 
  
      let divType = $(div).attr("data-type");
      let type
      /* HARD CODED URL HERE */
      if (divType === "dayavg"){
        type = dayAvg
        url = window.conf.api_url + "company/" + scope + "/device/" + device + "/data/dayavg";
      } else if (divType === "weekavgperday"){  
        type = weekAvgPerDay
        url = window.conf.api_url + "company/" + scope + "/device/" + device + "/data/weekavgperday";
      } else {
        type = weekAvgPerHour
        url = window.conf.api_url + "company/" + scope + "/device/" + device + "/data/weekavgperhour";
      }
  
      let chartConfig = {
          scope,
          device,
          token,
          url,
          showLabels: true,
          type: type,
      };
  
      chartInit(chartConfig);
    }
  })
})();