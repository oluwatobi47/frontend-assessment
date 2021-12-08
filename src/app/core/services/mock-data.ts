export const USER_ACCOUNT  = {
  userName: 'Bessie Cooper',
  userPhoto: '/assets/images/Rectangle 6.svg',
}

export const DASHBOARD_MENU_OPTIONS = [
  {
    key: 'BITFOREX',
    value: 'bitforex.com',
    label: 'Bit Forex',
    icon: '/assets/logos/bitcoin.svg'
  },
  {
    key: 'AIRBNB',
    value: 'airbnd.com',
    label: 'Air Bnb',
    icon: '/assets/logos/airbnb.svg'
  },
  {
    key: 'WUBIN',
    value: 'wubin.design',
    label: 'Wubin',
    icon: '/assets/logos/wubin.svg'
  }
];

export const SIDE_MENU_OPTIONS = [
  {
    label: 'Category',
    icon: '/assets/menu_options/one.svg'
  },
  {
    label: 'Chart',
    icon: '/assets/menu_options/pie-chart.svg'
  },
  {
    label: 'Time based Data',
    icon: '/assets/menu_options/clock.svg'
  },
  {
    label: 'Global Data',
    icon: '/assets/menu_options/globe.svg'
  },
  {
    label: 'Some data',
    icon: '/assets/menu_options/loader.svg'
  },
];

export const DASHBOARD_DATA:{[key:string]: any} = {
  'BITFOREX': {
    activeMonths: [
      {
        key: '01_2020',
        value: 'January 2020'
      },
      {
        key: '02_2020',
        value: 'February 2020'
      },
      {
        key: '03_2020',
        value: 'March 2020'
      }
    ],
    seriesData: {
      '01_2020': {
        summary: {
          incomeData: {
            percentage: 25,
            percentageIncrease: 15
          },
          activeUsers: 5435000,
          inActiveUsers: 1234768,
          frequentUsers: 1123342
        },
        dataSets: [
          {
            label: 'Active',
            data: [
              {
                key: '1',
                value: 10000
              },
              {
                key: '2',
                value: 55000
              },
              {
                key: '3',
                value: 100
              },
              {
                key: '4',
                value: 45300
              },
              {
                key: '5',
                value: 17000
              },
              {
                key: '6',
                value: 3900
              },
              {
                key: '7',
                value: 19000
              },
              {
                key: '8',
                value: 6000
              },
              {
                key: '9',
                value: 35000
              },
              {
                key: '10',
                value: 13000
              }
            ]
          },
          {
            label: 'InActive',
            data: [
              {
                key: '1',
                value: 3000
              },
              {
                key: '2',
                value: 19000
              },
              {
                key: '3',
                value: 6000
              },
              {
                key: '4',
                value: 3000
              },
              {
                key: '5',
                value: 1000
              },
              {
                key: '6',
                value: 13400
              },
              {
                key: '7',
                value: 12300
              },
              {
                key: '8',
                value: 12300
              },
              {
                key: '9',
                value: 7600
              },
              {
                key: '10',
                value: 65400
              }
            ]
          }
        ]
      },
      '02_2020': {
        summary: {
          incomeData: {
            percentage: 25,
            percentageIncrease: 15
          },
          activeUsers: 3435000,
          frequentUsers: 1123342,
          inActiveUsers: 1534768
        },
        dataSets: [
          {
            label: 'Active',
            data: [
              {
                key: '1',
                value: 10000
              },
              {
                key: '2',
                value: 15000
              },
              {
                key: '3',
                value: 13000
              },
              {
                key: '4',
                value: 14000
              },
              {
                key: '5',
                value: 17000
              }
            ]
          },
          {
            label: 'InActive',
            data: [
              {
                key: '1',
                value: 3000
              },
              {
                key: '2',
                value: 19000
              },
              {
                key: '3',
                value: 6000
              },
              {
                key: '4',
                value: 3000
              },
              {
                key: '5',
                value: 1000
              }
            ]
          }
        ]
      },
      '03_2020': {
        summary: {
          incomeData: {
            percentage: 25,
            percentageIncrease: 15
          },
          activeUsers: 84300,
          frequentUsers: 13342,
          inActiveUsers: 724768
        },
        dataSets: [
          {
            label: 'Active',
            data: [
              {
                key: '1',
                value: 13400
              },
              {
                key: '2',
                value: 12300
              },
              {
                key: '3',
                value: 12300
              },
              {
                key: '4',
                value: 7600
              },
              {
                key: '5',
                value: 65400
              }
            ]
          },
          {
            label: 'InActive',
            data: [
              {
                key: '1',
                value: 32400
              },
              {
                key: '2',
                value: 34300
              },
              {
                key: '3',
                value: 42200
              },
              {
                key: '4',
                value: 76500
              },
              {
                key: '5',
                value: 234500
              }
            ]
          }
        ]
      }
    }
  },
  'WUBIN': {
    activeMonths: [
      {
        key: '01_2020',
        value: 'January 2020'
      },
      {
        key: '02_2020',
        value: 'February 2020'
      },
      {
        key: '03_2020',
        value: 'March 2020'
      },
      {
        key: '04_2020',
        value: 'April 2020'
      }
    ],
    seriesData: {
      '04_2020': {
        summary: {
          incomeData: {
            percentage: 25,
            percentageIncrease: 15
          },
          activeUsers: 84300,
          frequentUsers: 11232,
          inActiveUsers: 7234768
        },
        dataSets: [
          {
            label: 'Active',
            data: [
              {
                key: '1',
                value: 13400
              },
              {
                key: '2',
                value: 12300
              },
              {
                key: '3',
                value: 12300
              },
              {
                key: '4',
                value: 7600
              },
              {
                key: '5',
                value: 65400
              }
            ]
          },
          {
            label: 'InActive',
            data: [
              {
                key: '1',
                value: 32400
              },
              {
                key: '2',
                value: 34300
              },
              {
                key: '3',
                value: 42200
              },
              {
                key: '4',
                value: 76500
              },
              {
                key: '5',
                value: 234500
              }
            ]
          }
        ]
      },
      '02_2020': {
        summary: {
          incomeData: {
            percentage: 25,
            percentageIncrease: 15
          },
          activeUsers: 5435000,
          frequentUsers: 112332,
          inActiveUsers: 1234768
        },
        dataSets: [
          {
            label: 'Active',
            data: [
              {
                key: '1',
                value: 10000
              },
              {
                key: '2',
                value: 15000
              },
              {
                key: '3',
                value: 13000
              },
              {
                key: '4',
                value: 14000
              },
              {
                key: '5',
                value: 17000
              },
              {
                key: '6',
                value: 1300
              },
              {
                key: '7',
                value: 153000
              },
              {
                key: '8',
                value: 154000
              },
              {
                key: '9',
                value: 154300
              },
              {
                key: '10',
                value: 156000
              }
            ]
          },
          {
            label: 'InActive',
            data: [
              {
                key: '1',
                value: 3000
              },
              {
                key: '2',
                value: 19000
              },
              {
                key: '3',
                value: 6000
              },
              {
                key: '4',
                value: 3000
              },
              {
                key: '5',
                value: 1700
              },
              {
                key: '6',
                value: 13800
              },
              {
                key: '7',
                value: 13000
              },
              {
                key: '8',
                value: 154000
              },
              {
                key: '9',
                value: 14300
              },
              {
                key: '10',
                value: 56000
              }
            ]
          }
        ]
      },
      '01_2020': {
        summary: {
          incomeData: {
            percentage: 25,
            percentageIncrease: 15
          },
          activeUsers: 343000,
          frequentUsers: 243000,
          inActiveUsers: 154768
        },
        dataSets: [
          {
            label: 'Active',
            data: [
              {
                key: '1',
                value: 10000
              },
              {
                key: '2',
                value: 15000
              },
              {
                key: '3',
                value: 13000
              },
              {
                key: '4',
                value: 14000
              },
              {
                key: '5',
                value: 17000
              },
              {
                key: '6',
                value: 13400
              },
              {
                key: '7',
                value: 12300
              },
              {
                key: '8',
                value: 12300
              },
              {
                key: '9',
                value: 7600
              },
              {
                key: '10',
                value: 65400
              },              {
                key: '11',
                value: 3000
              },
              {
                key: '12',
                value: 19000
              },
              {
                key: '13',
                value: 6000
              },
              {
                key: '14',
                value: 56300
              },
              {
                key: '15',
                value: 30400
              },
            ]
          },
          {
            label: 'InActive',
            data: [
              {
                key: '1',
                value: 3000
              },
              {
                key: '2',
                value: 19000
              },
              {
                key: '3',
                value: 6000
              },
              {
                key: '4',
                value: 3000
              },
              {
                key: '5',
                value: 1000
              },
              {
                key: '6',
                value: 13400
              },
              {
                key: '7',
                value: 1300
              },
              {
                key: '8',
                value: 17400
              },
              {
                key: '9',
                value: 8700
              },
              {
                key: '10',
                value: 6400
              },
              {
                key: '11',
                value: 36300
              },
              {
                key: '12',
                value: 19000
              },
              {
                key: '13',
                value: 6000
              },
              {
                key: '14',
                value: 3000
              },
              {
                key: '15',
                value: 1400
              }
            ]
          }
        ]
      },
      '03_2020': {
        summary: {
          incomeData: {
            percentage: 25,
            percentageIncrease: 15
          },
          activeUsers: 3435000,
          frequentUsers: 1123342,
          inActiveUsers: 1534768
        },
        dataSets: [
          {
            label: 'Active',
            data: [
              {
                key: '1',
                value: 10000
              },
              {
                key: '2',
                value: 15000
              },
              {
                key: '3',
                value: 13000
              },
              {
                key: '4',
                value: 14000
              },
              {
                key: '5',
                value: 17000
              }
            ]
          },
          {
            label: 'InActive',
            data: [
              {
                key: '1',
                value: 3000
              },
              {
                key: '2',
                value: 19000
              },
              {
                key: '3',
                value: 6000
              },
              {
                key: '4',
                value: 3000
              },
              {
                key: '5',
                value: 1000
              }
            ]
          }
        ]
      },
    }
  }
};
