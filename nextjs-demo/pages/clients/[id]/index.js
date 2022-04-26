import { useRouter } from 'next/router'

function ClientID()
{
    const router = useRouter();

    function loadProjectHandler(){
        // loda data
        //router.push('/clients/max/projecta') or
        router.push({
            pathname: '/clients/[id]/[clienteProject]',
            query: { id: 'min', clienteProject: 'pa' }
        });
    }

    return(
        <div>
            <h3>clinet ID</h3>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientID;