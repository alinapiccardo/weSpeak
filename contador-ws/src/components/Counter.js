"use client";

import { useState, useEffect, useTransition } from "react";
import { getCounter, updateCounter, resetCounter } from "../app/api/actions";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getCounter().then(setCount);
  }, []);

  const handleIncrease = () => {
    startTransition(async () => {
      const newValue = await updateCounter(true);
      setCount(newValue);
    });
  };

  const handleDecrease = () => {
    startTransition(async () => {
      const newValue = await updateCounter(false);
      setCount(newValue);
    });
  };

  const handleReset = () => {
    startTransition(async () => {
      const newValue = await resetCounter();
      setCount(newValue);
    });
  };

  return (
    <div className="bg-white text-black shadow-lg rounded-2xl p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contador WeSpeak</h1>
      <p className="text-6xl font-extrabold mb-6">{isPending ? "..." : count}</p>
      <div className="flex gap-6">
        <button
          onClick={handleDecrease}
          className="px-6 py-3 text-lg bg-black hover:bg-black/60 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          - Disminuir
        </button>
        <button
          onClick={handleIncrease}
          className="px-6 py-3 text-lg bg-primary hover:bg-violet-400 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          + Aumentar
        </button>
      </div>
      <div className="my-6"></div>
        <p className="text-lg font-semibold">¿Quieres reiniciar el contador?</p>
      <button
          onClick={handleReset}
          className="mt-5 px-6 py-3 text-lg bg-red-400 hover:bg-red-200 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          Reset
        </button>
      <p className="mt-4 text-sm text-gray-500">
        {isPending ? "Actualizando..." : "Contador actualizado"}
      </p>
    </div>
  );
}
