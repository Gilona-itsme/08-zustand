import css from "./Loading.module.css";

export default function Loading() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <p>Loading, please wait...</p>
      </div>
    </main>
  );
}