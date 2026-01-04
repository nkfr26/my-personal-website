import { createFileRoute } from '@tanstack/react-router'
import { BusinessCard } from './-components/business-card'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="grid place-content-center pb-12 select-none">
      <BusinessCard />
    </main>
  )
}
