import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { renderServerComponent } from '@tanstack/react-start/rsc'
import { BusinessCard } from './-components/business-card'

const getMain = createServerFn().handler(() => {
  return renderServerComponent(
    <main className="grid place-content-center pb-12">
      <BusinessCard />
    </main>,
  )
})

export const Route = createFileRoute('/')({
  loader: async () => {
    const main = await getMain()
    return { main }
  },
  component: App,
})

function App() {
  const { main } = Route.useLoaderData()
  return <>{main}</>
}
