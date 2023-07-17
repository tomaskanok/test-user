'use client';
import { useState } from "react";

function AddUser() {
    const [name, setName] = useState('');
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            const body = {
                name: name,
            };
            await fetch(`/api/user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })

        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">Odeslat</button>
            </form>
        </div>
    );
}

export default AddUser;