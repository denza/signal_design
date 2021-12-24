// Test import of styles
import '@/styles/tailwind.scss'

// Import Alpine.js
import Alpine from 'alpinejs'

// Import ApexCharts
import ApexCharts from 'apexcharts'

window.Alpine = Alpine

Alpine.start()

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
        series[seriesIndex][dataPointIndex] +
        '°C </span></div>'
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

// s1 chart
let s1_chart01_day = {
  chart: {
    id: 's1_chart01',
    group: 'n1',
    type: 'line',
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
        { x: '11:15', y: '5,05', strokeColor: '#C8233380', fillColor: '#C82333' },
        { x: '11:32', y: '-20' },
        { x: '12:00', y: '-5', strokeColor: '#C8233380', fillColor: '#C82333' },
        { x: '14:00', y: '-25,25' },
        { x: '16:00', y: '-19' },
      ],
    },
  ],
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
          cssClass: 'issue-img animate-pulse',
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
          cssClass: 'issue-img animate-pulse',
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
          cssClass: 'issue-img animate-pulse',
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
}
let s1_1_chart = new ApexCharts(document.querySelector('#s1_chart01'), s1_chart01_day)
s1_1_chart.render()

let s1_chart02_week = {
  chart: {
    id: 's1_chart02',
    group: 'n2-4',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Monday', y: '-24' },
        { x: 'Tuesday', y: '-29' },
        { x: 'Wednesday', y: '-4' },
        { x: 'Thursday', y: '-10' },
        { x: 'Friday', y: '-5' },
        { x: 'Saturday', y: '-1' },
        { x: 'Sunday', y: '-7' },
      ],
    },
  ],
}
let s1_2_chart = new ApexCharts(document.querySelector('#s1_chart02'), s1_chart02_week)
s1_2_chart.render()

let s1_chart03_month = {
  chart: {
    id: 's1_chart02',
    group: 'n3-1',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Week 1', y: '0' },
        { x: 'Week 2', y: '-16' },
        { x: 'Week 3', y: '-7' },
        { x: 'Week 4', y: '-9' },
      ],
    },
  ],
}
let s1_3_chart = new ApexCharts(document.querySelector('#s1_chart03'), s1_chart03_month)
s1_3_chart.render()

// s2chart
let s2_chart01_day = {
  chart: {
    id: 's2_chart01',
    group: 'n1-1',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: '00:01', y: '-20' },
        { x: '01:00', y: '-20' },
        { x: '02:00', y: '-22' },
        { x: '04:00', y: '-25' },
        { x: '06:00', y: '-22' },
        { x: '08:00', y: '-26' },
        { x: '10:00', y: '-20' },
        { x: '11:15', y: '-15' },
        { x: '11:32', y: '-19' },
        { x: '12:00', y: '-28' },
        { x: '14:00', y: '-22.8' },
        { x: '16:00', y: '-25' },
      ],
    },
  ],
  annotations: {
    points: [],
  },
}
let s2_1_chart = new ApexCharts(document.querySelector('#s2_chart01'), s2_chart01_day)
s2_1_chart.render()

let s2_chart02_week = {
  chart: {
    id: 's2_chart02',
    group: 'n2-1',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Monday', y: '-24' },
        { x: 'Tuesday', y: '-29' },
        { x: 'Wednesday', y: '-4' },
        { x: 'Thursday', y: '-10' },
        { x: 'Friday', y: '-5' },
        { x: 'Saturday', y: '-1' },
        { x: 'Sunday', y: '-7' },
      ],
    },
  ],
}
let s2_2_chart = new ApexCharts(document.querySelector('#s2_chart02'), s2_chart02_week)
s2_2_chart.render()

let s2_chart03_month = {
  chart: {
    id: 's2_chart02',
    group: 'n3-2',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Week 1', y: '0' },
        { x: 'Week 2', y: '-16' },
        { x: 'Week 3', y: '-7' },
        { x: 'Week 4', y: '-9' },
      ],
    },
  ],
}
let s2_3_chart = new ApexCharts(document.querySelector('#s2_chart03'), s2_chart03_month)
s2_3_chart.render()

// s3 chart
let s3_chart01_day = {
  chart: {
    id: 's3_chart01',
    group: 'n1-2',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: '00:00', y: '-33' },
        { x: '02:00', y: '-32' },
        { x: '04:00', y: '-33' },
        { x: '06:00', y: '-32' },
        { x: '08:00', y: '-33' },
        { x: '10:00', y: '-34' },
        { x: '12:00', y: '-33' },
        { x: '14:00', y: '5', strokeColor: '#C8233380', fillColor: '#C82333' },
        { x: '16:00', y: '-5' },
      ],
    },
  ],
  annotations: {
    points: [
      {
        x: '14:00',
        y: 5,
        marker: {
          size: 16,
          fillColor: '#C82333',
          strokeColor: '#ffffff80',
          strokeWidth: 8,
          radius: 100,
          cssClass: 'issue-img animate-pulse',
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
    ],
  },
}
let s3_1_chart = new ApexCharts(document.querySelector('#s3_chart01'), s3_chart01_day)
s3_1_chart.render()

let s3_chart02_week = {
  chart: {
    id: 's3_chart02',
    group: 'n2-2',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Monday', y: '-24' },
        { x: 'Tuesday', y: '-29' },
        { x: 'Wednesday', y: '-4' },
        { x: 'Thursday', y: '-10' },
        { x: 'Friday', y: '-5' },
        { x: 'Saturday', y: '-1' },
        { x: 'Sunday', y: '-7' },
      ],
    },
  ],
}
let s3_2_chart = new ApexCharts(document.querySelector('#s3_chart02'), s3_chart02_week)
s3_2_chart.render()

let s3_chart03_month = {
  chart: {
    id: 's3_chart02',
    group: 'n3-3',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Week 1', y: '0' },
        { x: 'Week 2', y: '-16' },
        { x: 'Week 3', y: '-7' },
        { x: 'Week 4', y: '-9' },
      ],
    },
  ],
}
let s3_3_chart = new ApexCharts(document.querySelector('#s3_chart03'), s3_chart03_month)
s3_3_chart.render()

// s4 chart
let s4_chart01_day = {
  chart: {
    id: 's4_chart01',
    group: 'n1-3',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: '00:00', y: '-15' },
        { x: '02:00', y: '-14' },
        { x: '04:00', y: '-22' },
        { x: '06:00', y: '-10' },
        { x: '08:00', y: '-24' },
        { x: '10:00', y: '-12' },
        { x: '12:00', y: '-20' },
        { x: '14:00', y: '5', strokeColor: '#C8233380', fillColor: '#C82333' },
        { x: '16:00', y: '-25' },
      ],
    },
  ],
  annotations: {
    points: [
      {
        x: '14:00',
        y: 5,
        marker: {
          size: 16,
          fillColor: '#C82333',
          strokeColor: '#ffffff80',
          strokeWidth: 8,
          radius: 100,
          cssClass: 'issue-img animate-pulse',
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
    ],
  },
}
let s4_1_chart = new ApexCharts(document.querySelector('#s4_chart01'), s4_chart01_day)
s4_1_chart.render()

let s4_chart02_week = {
  chart: {
    id: 's4_chart02',
    group: 'n2-3',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Monday', y: '-24' },
        { x: 'Tuesday', y: '-29' },
        { x: 'Wednesday', y: '-4' },
        { x: 'Thursday', y: '-10' },
        { x: 'Friday', y: '-5' },
        { x: 'Saturday', y: '-1' },
        { x: 'Sunday', y: '-7' },
      ],
    },
  ],
}
let s4_2_chart = new ApexCharts(document.querySelector('#s4_chart02'), s4_chart02_week)
s4_2_chart.render()

let s4_chart03_month = {
  chart: {
    id: 's4_chart02',
    group: 'n3-4',
    type: 'line',
  },
  series: [
    {
      name: 'Temperature',
      data: [
        { x: 'Week 1', y: '0' },
        { x: 'Week 2', y: '-16' },
        { x: 'Week 3', y: '-7' },
        { x: 'Week 4', y: '-9' },
      ],
    },
  ],
}
let s4_3_chart = new ApexCharts(document.querySelector('#s4_chart03'), s4_chart03_month)
s4_3_chart.render()
