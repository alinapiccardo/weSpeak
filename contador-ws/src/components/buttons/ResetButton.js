"use client";

import { useFormStatus } from "react-dom";
import { resetCounter } from "../../app/api/actions";

export default function ResetButton() {
  const { pending } = useFormStatus();

  return (
    <form action={resetCounter}>
      <button
        type="submit"
        className="mt-5 px-6 py-3 text-lg bg-red-400 hover:bg-red-200 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
      >
        {pending ? "..." : "Reset"}
      </button>
    </form>
  );
}
