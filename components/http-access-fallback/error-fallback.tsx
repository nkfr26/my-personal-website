// https://github.com/vercel/next.js/blob/canary/packages/next/src/client/components/http-access-fallback/error-fallback.tsx

export function HTTPAccessErrorFallback({
  status,
  message,
}: {
  status: number;
  message: string;
}) {
  return (
    <>
      {/* <head> */}
      <title>{`${status}: ${message}`}</title>
      {/* </head> */}
      <div className="grid select-none place-content-center">
        <div className="flex items-center">
          <h1 className="mr-5 border-r border-current pr-6 text-2xl">
            {status}
          </h1>
          <h2 className="text-sm">{message}</h2>
        </div>
      </div>
    </>
  );
}
