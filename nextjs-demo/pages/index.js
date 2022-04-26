import Link from 'next/link';

function HomePage()
{
  return (
    <div>
      <h1>Home page</h1>
    <ul>
      <li>
        <Link href={"/portafolio"}> Go to Portafolio </Link> 
      </li>
      <li>
        <Link href={"/clients"}> Go to clients </Link> 
      </li>
    </ul>
    </div>
  )
}

export default HomePage;