import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="container-x py-32 text-center">
      <div className="eyebrow text-sand-300">404</div>
      <h1 className="mt-6 font-display font-bold text-6xl text-ink-50">Deze pagina niet gebouwd.</h1>
      <Link href="/" className="btn btn-solid mt-10 inline-flex">Naar de homepage</Link>
    </div>
  )
}
