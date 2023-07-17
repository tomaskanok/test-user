import Link from "next/link";

function Navbar() {
    return (
        <div className="mb-5">
            <ul>
                <li>
                    <Link href="adduser" >add user</Link>
                </li>
                <li>
                    <Link href="listofusers" >list of users</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;