export default function NotFound() {
  return (
    <>
      {/* <head> */}
      <title>404: This page could not be found.</title>
      {/* </head> */}
      <div className="grid select-none place-content-center">
        <div className="flex">
          {/* Minified CSS from
              body { margin: 0; color: #000; background: #fff; }
              .next-error-h1 {
                border-right: 1px solid rgba(0, 0, 0, .3);
              }
  
              @media (prefers-color-scheme: dark) {
                body { color: #fff; background: #000; }
                .next-error-h1 {
                  border-right: 1px solid rgba(255, 255, 255, .3);
                }
              }
            */}
          <h1 className="mr-5 border-r border-foreground pr-6 text-2xl leading-loose">
            404
          </h1>
          <div className="grid content-center">
            <h2 className="text-sm">This page could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
