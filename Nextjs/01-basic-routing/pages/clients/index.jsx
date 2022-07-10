import Link from "next/link";

const Client = () => {
  const clients = [
    { name: "Maxi", id: "Max" },
    { name: "Jirat", id: "Jira" },
  ];

  return (
    <>
      <h1>The Clinets</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Client;
