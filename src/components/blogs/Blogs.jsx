import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchVehicles = async () => {
  const response = await axios.get("http://localhost:5000/api/vehicle");
  return response.data;
};

const Blogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchVehicles,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.price} - {user.capacity} - {user.including}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
