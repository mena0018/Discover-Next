import React from "react";
import User from "../src/types/UserType";
import Link from "next/link";

type Props = {
  user: User;
};

function Card({ user }: Props) {
  return (
    <div className="shadow-md p-5 min-w-[300px] rounded">
      <Link href={`/users/${user.id}`}>
        <h2 className="font-semibold text-lg">{user.name}</h2>
        <h5 className="text-slate-600 italic mt-3">{user.phone}</h5>
        <p>{user.website}</p>
      </Link>
    </div>
  );
}

export default Card;
