import { useRouter } from "next/router";

const Client = () => {
  const router = useRouter();
  return (
    <>
      <h1>Project #{router.query.projectId}</h1>
      <h3>of client #{router.query.id}</h3>
    </>
  );
};

export default Client;
