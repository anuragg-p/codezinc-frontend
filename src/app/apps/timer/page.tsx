"use client";
import { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Effect to handle countdown logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      alert("⏰ Time's up!");
      setIsRunning(false);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (inputSeconds > 0) {
      setTimeLeft(inputSeconds);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInputSeconds(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-900 text-white rounded shadow-md max-w-md mx-auto">
      

      <input
        type="number"
        placeholder="Enter seconds"
        className="px-2 py-1 rounded text-black"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(Number(e.target.value))}
        disabled={isRunning}
      />

      <div className="text-4xl font-mono">{formatTime(timeLeft)}</div>

      <div className="flex gap-2">
        {!isRunning ? (
          <button
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            onClick={handleStart}
          >
            Start
          </button>
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded"
            onClick={handleStop}
          >
            Stop
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          onClick={handleReset}
        >
          
        </button>
      </div>
    </div>
  );
}
