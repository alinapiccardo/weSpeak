import Counter from "../components/Counter.js";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <Counter />
    </main>
  );
}
