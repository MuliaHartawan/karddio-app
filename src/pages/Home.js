import React from 'react';
import Chart from 'react-apexcharts';

import { RiCheckboxCircleFill} from 'react-icons/ri';

import ProgressIdb from '../data/progress-idb';

const Home = () => {
    const [finishedProgress, setFinishedProgress] = React.useState([]);
    const [onProgress, setOnProgress] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
        const onProgress = await ProgressIdb.getOnProgress();
        const finishedProgress = await ProgressIdb.getFinishedProgress();

        const size = 3;
        const history = finishedProgress.slice(0, size);

        setOnProgress(onProgress);
        setFinishedProgress(history);
    }
        getData();
    },[]);
    return (
        <div className="px-4 mb-3 md:px-24">
            <div className="flex flex-row justify-between md:mr-16 xl:mr-24">
                <div>
                    <h1 className="text-lg font-bold md:text-xl lg:text-3xl">Hello, Nama Orang</h1>
                    <p className="text-sm md:text-base lg:text-lg text-green-400">Your daily score currently</p>
                </div>
                <div className="relative pt-2">
                    <img src="./image/trophy.png" alt=""
                            className="w-10 h-10 md:w-14 md:h-14 lg:h-20 lg:w-20 mb-0" ></img>
                    <span className="absolute bg-green-400 w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full top-0 right-1
                                    text-xs flex items-center justify-center font-medium text-white md:text-sm" >1</span>
                </div>
            </div>
            <ProgressChart />
            <div className='flex flex-col space-y-4'>
                <h2 className="text-lg font-bold md:text-xl lg:text-3xl mb-2">Current Exercise</h2>
            {onProgress.map((item) => (
                <div key={item.id} className="w-72 lg:w-80 px-1 py-2 justify-between flex flex-row rounded-md border border-gray-400">
                    <div className="flex items-center ml-2">
                        <img src={`./image/${item.workout}.jpg`}alt="tes"
                            className="h-16 w-20 lg:h-3236"></img>
                    </div>
                    <div className='flex flex-col justify-center mr-8'>
                        <p className="flex justify-left items-center text-base lg:text-lg text-gray-300 font-bold">{item.workout}</p>
                        <p className="flex justify-left items-center text-xs lg:text-base text-gray-300 font-bold">{item.workoutDuration}</p>
                        <p className='flex justify-left items-center text-xs lg:text-base  text-gray-300'>Level 1</p>
                    </div>
                    <div className='flex justify-center items-center mr-4'>
                        <RiCheckboxCircleFill className='h-8 w-8 text-gray-300' />
                    </div>
                </div>
            ))}
            {finishedProgress.map((item) => (
                <div className="w-72 px-1 lg:w-80 py-2 justify-between flex flex-row rounded-md border border-gray-400">
                    <div className="flex items-center">
                        <img src={`./image/${item.workout}.jpg`}alt="tes"
                            className="h-16 w-20 lg:h-20 lg:w-24"></img>
                    </div>
                    <div className='flex flex-col justify-center mr-10'>
                        <p className="flex justify-left items-center text-base lg:text-lg font-bold">{item.workout}</p>
                        <p className="flex justify-left items-center text-xs lg:text-base font-bold">{item.workoutDuration}</p>
                        <p className='flex justify-left items-center text-xs lg:text-base  text-green-400'>Level 1</p>
                    </div>
                    <div className='flex justify-center items-center mr-6'>
                        <RiCheckboxCircleFill className='h-8 w-8 text-green-400' />
                    </div>
                </div>
            ))}
            </div>

        </div>
    );
}

class ProgressChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example',
            width: 300,
            height: 320,
            toolbar: {
                show: false,
            }
          },
          responsive: [
            {
              breakpoint: 371,
              options: {
                chart: {
                  width: 300,
                  height: 200,
                }
              }
            },
            {
              breakpoint: 400,
              options: {
                chart: {
                  width: 350,
                  height: 200,
                }
              }
            },
            {
              breakpoint: 500,
              options: {
                chart: {
                  width: 375,
                  height: 200,
                }
              }
            },
            {
              breakpoint: 1000,
              options: {
                chart: {
                  width: 500,
                  height: 250,
                },
              }
            },
            {
              breakpoint: 1200,
              options: {
                chart: {
                  width: 750,
                  height: 300,
                }
              }
            },
            {
              breakpoint: 1500,
              options: {
                chart: {
                  width: 1000,
                  height: 350,
                }
              }
            }
          ],
          dataLabels: {
            enabled: false
          },
          colors:['#16C79A'],
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 0,
            dashArray: 0,      
        },
        yaxis: [{
            opposite: true,
            fontSize:"50px",
        }],
        fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100]
            }
          },
          xaxis: {
            style:{
                fontSize:"10px",
            },
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        },
        series: [{
          name: 'Point',
          data: [200, 100, 100, 200, 300, 100, 0]
        }]
      }
    }
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type="area" />
      )
    }
  }
  



export default Home;
