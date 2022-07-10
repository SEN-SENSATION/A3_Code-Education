import { useRouter } from "next/router";

const Client = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push(`/clients/${router.query.id}/proja`);
  };

  return (
    <>
      <h1>Clinet #{router.query.id}'s Projects</h1>
      <button onClick={loadProjectHandler}>Project A</button>
    </>
  );
};

export default Client;
