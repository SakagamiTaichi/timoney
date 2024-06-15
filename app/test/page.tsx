export default async function Page() {
  const list = await fetch("http://localhost:3001/users").then((res) =>
    res.json()
  );
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        );
      })}
    </ul>
  );
}
