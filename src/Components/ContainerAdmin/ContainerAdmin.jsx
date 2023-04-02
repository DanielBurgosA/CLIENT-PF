export default function ContainerAdmin({ data }) {
  return (
    <>
      {data.map((elem) => {
        return (
          <>
            <p>Name Project: {elem.name}</p>
            <p>Location Project: {elem.location}</p>
            <p>Status Project: {elem.status}</p>
            <br />
            <hr />
          </>
        );
      })}
    </>
  );
}
