export default function NewJokeRoute() {
  return (
    <div>
      <p>add a joke</p>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="name">
          Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="content">
          Content:
          <textarea name="content" cols={30} rows={3} />
        </label>
        <button>add</button>
      </form>
    </div>
  );
}
