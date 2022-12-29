import User from "../../../src/types/UserType";
import Card from "../../../components/Card";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";

type Props = {
  user: User;
};

function User({ user }: Props) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-6">
      <Card key={user.id} user={user} />
      <Link
        href="/users"
        className="block bg-slate-700 px-5 py-2 capitalize rounded-md ring-1 ring-slate-200 text-slate-100"
      >
        Go back
      </Link>
    </div>
  );
}

export default User;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context!.params!.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();

  const paths = data.map((user: User) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
