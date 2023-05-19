import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="flex justify-center align-middle space-x-5 p-2 bg-orange-500 md:w-1/2 mx-auto rounded-2xl text-white">
      {timeLeft.days > 0 && (
        <div className="text-center m-0">
          <div className="text-[50px] font-bold bg-">
            {addLeadingZero(timeLeft.days)}
          </div>
          <div className="text-[12px]">Days</div>
        </div>
      )}
      <div className="text-center m-0">
        <div className="text-[50px] font-bold">
          {addLeadingZero(timeLeft.hours)}
        </div>
        <div className="text-[12px]">Hours</div>
      </div>
      <div className="text-center m-0">
        <div className="text-[50px] font-bold">
          {addLeadingZero(timeLeft.minutes)}
        </div>
        <div className="text-[12px]">Minutes</div>
      </div>
      <div className="text-center m-0">
        <div className="text-[50px] font-bold">
          {addLeadingZero(timeLeft.seconds)}
        </div>
        <div className="text-[12px]">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
