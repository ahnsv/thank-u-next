import Link from 'next/link'

const Index = () => {
  <div>
    <h1>
      Hi
    </h1>
    <h2>
      <Link href="/about">
        <a>About</a>
      </Link>
    </h2>
  </div>
}

export default Index