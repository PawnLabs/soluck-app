"use client";
import React, { useState, useRef, useCallback, useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption, ECharts } from "echarts";
import { players } from "../_dummyData/players";
import { Countdown } from "./Countdown";
import PinSvg from "../icons/Pin.svg";
import Image from "next/image";

export const GameArea = () => {
  const [isRotating, setIsRotating] = useState(false);
  const chartRef = useRef<ReactECharts>(null);
  const animationRef = useRef<number | null>(null);

  const TOTAL_DURATION = 5000; // Total animation duration in milliseconds
  const ROTATIONS = 20; // Number of full rotations before stopping

  const data = useMemo(() => players, []);

  const totalValue = useMemo(
    () => data.reduce((sum, item) => sum + item.value, 0),
    [data],
  );

  const calculateWinnerRotation = useCallback(
    (index: number) => {
      let angleSum = 0;
      for (let i = 0; i < index; i++) {
        angleSum += (data[i].value / totalValue) * 360;
      }
      angleSum += (data[index].value / totalValue) * 180;
      return (180 - angleSum + 360) % 360; // Changed from 270 to 360
    },
    [data, totalValue],
  );

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const animate = (startTime: number, winnerRotation: number) => {
    const now = performance.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / TOTAL_DURATION, 1);
    const easedProgress = easeInOutQuad(progress);

    const rotation = easedProgress * (ROTATIONS * 360 + winnerRotation);
    const currentRotation = rotation % 360;

    if (chartRef.current) {
      const chart = chartRef.current.getEchartsInstance();
      chart.setOption({
        series: [
          {
            startAngle: 90 - currentRotation,
          },
        ],
      });
    }

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(() =>
        animate(startTime, winnerRotation),
      );
    } else {
      setIsRotating(false);
    }
  };

  const startRotation = () => {
    if (isRotating) return;

    setIsRotating(true);
    const winnerIndex = 0;
    const winnerRotation = calculateWinnerRotation(winnerIndex);

    console.log(`Winner: ${data[winnerIndex].name}`);

    const startTime = performance.now();
    animate(startTime, winnerRotation);
  };

  const option: EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Player",
        type: "pie",
        radius: ["85%", "93%"],
        avoidLabelOverlap: false,
        padAngle: 4,
        startAngle: 90,
        itemStyle: {
          borderRadius: 15,
        },
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        animation: false,
        data: data,
      },
    ],
  };

  return (
    <div className="flex h-[615px] w-full flex-col items-center justify-center">
      <div
        onClick={startRotation}
        className="relative h-[600px] w-[600px] rounded-full border-[1px] border-black-4 bg-game-gradient"
      >
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-black-4 bg-game-gradient"></div>
        <div className="absolute left-1/2 top-1/2 z-10 flex h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black-main">
          <Countdown></Countdown>
        </div>
        <ReactECharts
          ref={chartRef}
          option={option}
          style={{ height: "100%", width: "100%" }}
          notMerge={true}
          lazyUpdate={false}
        />
        <div className="absolute bottom-[-30px] left-1/2">
          <Image src={PinSvg} alt="Arrow Down" width={32} height={56} />
        </div>
      </div>
    </div>
  );
};
