"use client";

import { useState, useEffect, useTransition } from "react";
import { getCounter, updateCounter } from "../app/api/actions";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getCounter().then(setCount);
  }, []);

  const handleClick = (increment) => {
    startTransition(async () => {
      const newValue = await updateCounter(increment);
      setCount(newValue);
    });
  };

  return (
    <div className="bg-white text-black shadow-lg rounded-2xl p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contador Persistente</h1>
      <p className="text-6xl font-extrabold mb-6">{isPending ? "..." : count}</p>
      <div className="flex gap-6">
        <button
          onClick={() => handleClick(false)}
          className="px-6 py-3 text-lg bg-red-500 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          - Disminuir
        </button>
        <button
          onClick={() => handleClick(true)}
          className="px-6 py-3 text-lg bg-green-500 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          + Aumentar
        </button>
      </div>
    </div>
  );
}
