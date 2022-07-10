import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <h1>404 - Not Found</h1>
      <h3>The route "{router.asPath}" does not exist </h3>
    </>
  );
};

export default NotFound;
