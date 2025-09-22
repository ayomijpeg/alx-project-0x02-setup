import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface APIUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<APIUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 grid gap-4 md:grid-cols-2">
        <h1 className="text-3xl font-bold col-span-full mb-4">Users</h1>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </>
  );
};

export default UsersPage;
