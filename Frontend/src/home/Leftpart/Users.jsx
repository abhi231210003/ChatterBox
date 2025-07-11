import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div className="gap-y-5">
      <h1 className="px-8 py-2 mb-5 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        className="py-5 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(74vh - 10vh)" }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
