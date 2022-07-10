import { useRouter } from "next/router";

const Client = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <>
      <h1>BLOG</h1>
    </>
  );
};

export default Client;
