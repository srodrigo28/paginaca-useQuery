import UsersDataTable from "./datable/_components/users-datable";

async function fetchUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return response.json();
}

export default async function DataTablePage(){
    const users = await fetchUsers();

    return(
        <>
            <h1 className="mb-5">DataTable</h1>
            <UsersDataTable users={users} />
        </>
    )
}