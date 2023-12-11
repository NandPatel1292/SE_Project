import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

import Chart from "./Chart";
import SearchBox from "../../components/SearchBox";

const Report = () => {
  const option2 = {
    color: ["var(--orange)"],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0,0,0,0.59)",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "20%",
      top: "2%",
      containLabel: true,
      show: false,
    },
    xAxis: {
      type: "category",
      boundryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: [150, 330, 140, 340, 130, 220, 260],
        type: "line",
        smooth: true,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255,191,0)",
            },
            {
              offset: 1,
              color: "#F450D3",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#FE4C00",
            },
            {
              offset: 1,
              color: "rgba(255,144,70,0.1)",
            },
          ]),
        },
        showSymbol: false,
      },
    ],
  };

  return (
    <>
      <div className="grid gap-3 m-6 p-5 md:grid-cols-3">
        <div className="flex flex-row gap-3">
          <label
            htmlFor="bar_code"
            className="flex justify-end items-center  mb-2 text-sm font-medium text-gray-900 w-20 text-left"
          >
            From
          </label>
          <input
            type="date"
            id="bar_code"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder=""
            //   onChange={handleBarcodeChange}
          />
        </div>
        <div className="flex flex-row gap-3">
          <label
            htmlFor="bar_code"
            className="flex justify-end items-center  mb-2 text-sm font-medium text-gray-900 w-20 text-left"
          >
            To
          </label>
          <input
            type="date"
            id="bar_code"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder=""
            //   onChange={handleBarcodeChange}
          />
        </div>
        <div className="flex flex-row gap-3">
          <label
            htmlFor="bar_code"
            className="flex justify-end items-center  mb-2 text-sm font-medium text-gray-900 w-20 text-left"
          >
            Filter By
          </label>
          <input
            type="text"
            id="bar_code"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder=""
            //   onChange={handleBarcodeChange}
          />
        </div>
      </div>
      <ReactECharts option={option2} />
      <Chart />
    </>
  );
};

export default Report;
