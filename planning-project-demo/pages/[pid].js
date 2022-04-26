import {useEffect} from 'react'



function ProductDetailpage(props)
{
    const { loadproduct } = props;
    return(
        <div>
            <h2>ProductDetailpage</h2>
            <p> {loadproduct.title} </p>
        </div>
    );
}

export async function getStaticProps(context){
    const products = [
        { id: 'p1', title: 'Product1' },
        { id: 'p2', title: 'ProductDOS' },
    ]
    const {params} = context;
    const productID = params.pid;
    const product = products.find( pro => pro.id === productID);
    return {
        props: {
            loadproduct : product
        }
    }
}

export async function getStaticPaths(){
    return {
        paths: [
            { params: { pid: 'p1' } },
            { params: { pid: 'p2' } }
        ],
        fallback: false
    };
}

export default ProductDetailpage;