export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className=" align-center border border-redish shadow rounded-md p-4 max-w-sm mx-auto w-full">
        <div className="animate-pulse flex items-center max-h-max gap-6">
          <div className="rounded-full bg-slate-200 h-6 w-6"></div>
          <div className="text-4xl">Loading... </div>
        </div>
      </div>
    </div>
  );
}
