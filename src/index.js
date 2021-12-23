// Test import of styles
import '@/styles/tailwind.scss'

// Import Alpine.js
import Alpine from 'alpinejs'

// Import ApexCharts
import ApexCharts from 'apexcharts'

window.Alpine = Alpine

Alpine.start()

var options = {
  chart: {
    type: 'line',
    width: 500,
    height: 180,
    foreColor: '#CDCEE480',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    stacked: false,
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
  series: [
    {
      name: 'Temperature',
      data: [
        { x: '00:01', y: '-15' },
        { x: '01:00', y: '-15' },
        { x: '02:00', y: '0', strokeColor: '#C8233380', fillColor: '#C82333' },
        { x: '04:00', y: '-14' },
        { x: '06:00', y: '-22' },
        { x: '08:00', y: '-10' },
        { x: '10:00', y: '-24' },
        { x: '11:15', y: '5', strokeColor: '#C8233380', fillColor: '#C82333' },
        { x: '11:32', y: '-20' },
        { x: '12:00', y: '-5', strokeColor: '#C8233380', fillColor: '#C82333' },
        { x: '14:00', y: '-25' },
        { x: '16:00', y: '-19' },
      ],
    },
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
    tooltip: {
      enabled: false,
    },
  },
  annotations: {
    points: [
      {
        x: '11:15',
        y: 5,
        marker: {
          size: 16,
          fillColor: '#C82333',
          strokeColor: '#ffffff80',
          strokeWidth: 8,
          radius: 100,
          cssClass: 'issue-img',
        },
        image: {
          path: '/images/graph/fix.png',
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 26,
          appendTo: '.issue-img',
        },
      },
      {
        x: '02:00',
        y: 0,
        marker: {
          size: 16,
          fillColor: '#C82333',
          strokeColor: '#ffffff80',
          strokeWidth: 8,
          radius: 100,
          cssClass: 'issue-img',
        },
        image: {
          path: '/images/graph/opened_door.png',
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 26,
          appendTo: '.issue-img',
        },
      },

      {
        x: '12:00',
        y: -5,
        marker: {
          size: 16,
          fillColor: '#C82333',
          strokeColor: '#ffffff80',
          strokeWidth: 8,
          radius: 100,
          cssClass: 'issue-img',
        },
        image: {
          path: '/images/graph/attention.png',
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 26,
          appendTo: '.issue-img',
        },
      },
    ],
  },
  yaxis: {
    min: -35,
    max: 10,
    tickAmount: 5,
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
    borderColor: '#CDCEE480',
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
        series[seriesIndex][dataPointIndex] +
        '°C </span></div>'
      )
    },
  },
}

var s1_chart = new ApexCharts(document.querySelector('#s1_chart01'), options)
s1_chart.render()

var s1_chart2 = new ApexCharts(document.querySelector('#s1_chart02'), options)
s1_chart2.render()

var s1_chart3 = new ApexCharts(document.querySelector('#s1_chart03'), options)
s1_chart3.render()

var s2_chart = new ApexCharts(document.querySelector('#s2_chart01'), options)
s2_chart.render()

var s2_chart2 = new ApexCharts(document.querySelector('#s2_chart02'), options)
s2_chart2.render()

var s2_chart3 = new ApexCharts(document.querySelector('#s2_chart03'), options)
s2_chart3.render()

var s3_chart = new ApexCharts(document.querySelector('#s3_chart01'), options)
s3_chart.render()

var s3_chart2 = new ApexCharts(document.querySelector('#s3_chart02'), options)
s3_chart2.render()

var s3_chart3 = new ApexCharts(document.querySelector('#s3_chart03'), options)
s3_chart3.render()

var s4_chart = new ApexCharts(document.querySelector('#s4_chart01'), options)
s4_chart.render()

var s4_chart2 = new ApexCharts(document.querySelector('#s4_chart02'), options)
s4_chart2.render()

var s4_chart3 = new ApexCharts(document.querySelector('#s4_chart03'), options)
s4_chart3.render()
