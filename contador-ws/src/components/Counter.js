import { getCounter } from "../app/api/actions";
import IncreaseButton from "./buttons/IncreaseButton";
import DecreaseButton from "./buttons/DecreaseButton";
import ResetButton from "./buttons/ResetButton";

export default async function Counter() {
  const count = await getCounter();

  return (
    <div className="bg-white text-black shadow-lg rounded-2xl p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contador WeSpeak</h1>
      <p className="text-6xl font-extrabold mb-6">{count}</p>
      <div className="flex gap-6">
        <DecreaseButton />
        <IncreaseButton />
      </div>
      <div className="my-6"></div>
      <p className="text-lg font-semibold">¿Quieres reiniciar el contador?</p>
      <ResetButton />
    </div>
  );
}
