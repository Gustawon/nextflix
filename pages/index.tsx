import { roboto_slab } from "./_app";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-10 text-7xl pt-40`}
    >
      <div className={`${roboto_slab.className}`}>NEXTFLIX - div styling</div>
      <div>NEXTFLIX - default app styling</div>
    </main>
  );
}
