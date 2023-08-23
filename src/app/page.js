import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="p-4 flex gap-6">
        <Link href="#one">One</Link>
        <Link href="#two">Two</Link>
        <Link href="#three">Three</Link>
      </div>
      <div id="one" className="h-screen bg-red-50" />
      <div id="two" className="h-screen bg-green-50" />
      <div id="three" className="h-screen bg-blue-50" />
    </main>
  )
}
