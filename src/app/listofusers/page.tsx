import prisma from "../lib/prisma";

async function ShowUsers() {
    const users = await prisma.user.findMany();
    return (
        <div>
            {users?.map((user) => (
                <div key={user.id}>
                    <strong>{user.name}</strong>
                </div>
            ))}
        </div>
    );
}

export default ShowUsers;