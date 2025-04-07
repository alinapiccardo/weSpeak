"use client";

import { useFormStatus } from "react-dom";
import { decreaseCounter } from "../../app/api/actions";

export default function DecreaseButton() {
  const { pending } = useFormStatus();

  return (
    <form action={decreaseCounter}>
      <button
        type="submit"
        className="px-6 py-3 text-lg bg-black hover:bg-black/60 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
      >
        {pending ? "..." : "- Disminuir"}
      </button>
    </form>
  );
}
