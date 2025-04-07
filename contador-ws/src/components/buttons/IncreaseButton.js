"use client";

import { useFormStatus } from "react-dom";
import { increaseCounter } from "../../app/api/actions";

export default function IncreaseButton() {
  const { pending } = useFormStatus();

  return (
    <form action={increaseCounter}>
      <button
        type="submit"
        className="px-6 py-3 text-lg bg-primary hover:bg-violet-400 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
      >
        {pending ? "..." : "+ Aumentar"}
      </button>
    </form>
  );
}
