

function UserProfilePage(props)
{

    const { usernam } = props

    return(
        <div>
            <h2>UserProfilePage</h2>
            <h4>{ usernam }</h4>
        </div>
    );
}

export default UserProfilePage;

//
export async function getServerSideProps(context)
{
    const { params, req, res } = context
    console.log(req)
    console.log(res)
    return {
        props: {
            usernam: 'Ned'
        }
    };
}