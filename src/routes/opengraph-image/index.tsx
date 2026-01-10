import { createFileRoute } from '@tanstack/react-router'
import { ImageResponse } from '@vercel/og'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/opengraph-image/')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const fontData = await fetch(
          new URL('/fonts/UDEVGothic35-Regular.ttf', request.url),
        ).then((r) => r.arrayBuffer())
        return new ImageResponse(
          <div
            tw={cn(
              'flex h-full w-full items-center justify-center bg-white text-8xl',
            )}
          >
            nkfr26.com
          </div>,
          {
            width: 1200,
            height: 630,
            fonts: [
              {
                name: 'UDEV Gothic 35',
                data: fontData,
              },
            ],
          },
        )
      },
    },
  },
})
