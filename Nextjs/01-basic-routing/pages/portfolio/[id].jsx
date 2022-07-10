import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();

  console.log(router.query);
  console.log(router.pathname);

  return (
    <>
      <h1>Portfolio #{router.query.id}</h1>
    </>
  );
};

export default Portfolio;
