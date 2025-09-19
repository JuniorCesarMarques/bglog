"use client"

export default function XmlReader() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const file = (e.target as any).file.files[0];
        const formData = new FormData();
        formData.append("file", file);

        console.log("FORMDATA", formData);

        const res = await fetch("/api/cte/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log(data);
      }}
    >
      <input className="bg-amber-400 p-2" type="file" name="file" accept=".xml" />
      <button type="submit">Enviar XML</button>
    </form>
  );
}
