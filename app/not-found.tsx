// https://github.com/vercel/next.js/blob/canary/packages/next/src/client/components/not-found-error.tsx
export default function NotFound() {
  return (
    <>
      {/* <head> */}
      <title>404: This page could not be found.</title>
      {/* </head> */}
      <div className="grid select-none place-content-center">
        <div className="flex items-center">
          <h1 className="mr-5 border-r border-current pr-6 text-2xl">404</h1>
          <h2 className="text-sm">This page could not be found.</h2>
        </div>
      </div>
    </>
  );
}
