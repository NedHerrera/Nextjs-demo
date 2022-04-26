
function HomePage(props)
{
    const { products } = props
    return(
        <div>
            <h2>HomePage</h2>
            <ul>
                { products.map( (product) => {
                    return <li key={product.id}> {product.title} </li>
                }) }
            </ul>
        </div>
    );
}

// this will be work before the component renders. Its the backend force.

export async function getStaticProps(context){
    console.log('Get static props working')
    return {
        props: {
            products : [
                { id: 'p1', title: 'Product1' },
                { id: 'p2', title: 'ProductDOS' },
            ]
        },
        revalidate: 5 // the getStaticProps will work every 5 seconds, it is OPTIONAL
    };
}

export default HomePage;