import { useRouter } from 'next/router'

function PortafolioIDPage()
{
    const router = useRouter();
    console.log(router.pathname)
    console.log(router.query)
    return <div>its the square bracket path</div>
}

export default PortafolioIDPage;