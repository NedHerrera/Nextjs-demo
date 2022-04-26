// with getServerProps



function UserIDPage(props)
{

    const { usernam } = props

    return(
        <div>
            <h2>UserIDPage</h2>
            <h4>{ usernam }</h4>
        </div>
    );
}

export default UserIDPage;

//
export async function getServerSideProps(context)
{
    const { params, req, res } = context
    const userID = params.uid
    return {
        props: {
            usernam: userID
        }
    };
}