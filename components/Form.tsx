"use client";
import { useRouter } from "next/navigation";

function Form() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, number }),
    });

    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg w-1/2 max-w-sm py-10 px-5 mx-auto rounded-md bg-gradient-to-r from-slate-200 to-slate-300 mt-20 flex flex-col gap-5 items-center justify-center"
    >
      <h3 className="text-center font-semibold text-2xl tracking-wide">
        Create User
      </h3>

      <input
        type="text"
        name="name"
        placeholder="name"
        className="border border-slate-800 rounded px-1 w-full"
      />
      <input
        type="number"
        name="number"
        placeholder="Phone Number"
        className="border border-slate-800 rounded px-1 w-full"
      />

      <button className="py-1 bg-slate-700 w-1/2 text-slate-100 rounded">
        Send
      </button>
    </form>
  );
}

export default Form;
