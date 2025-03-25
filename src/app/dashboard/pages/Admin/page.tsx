"use client";
import { push, ref, set, update, remove, onValue } from "firebase/database";
import { useRouter } from "next/navigation"; // For redirection
import { database } from "@/lib/firebaseconfig";
import { useState, useEffect } from "react";
import "./AdminPage.css";

// Define a TypeScript interface for user objects
interface User {
  id: string;
  sno: number;
  email: string;
  name: string;
  joiningdate: string;
  status: "Pending" | "Joined";
  type: "Domain Expert" | "ADMIN" | "In-House Team";
} 

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [inviteEmail, setInviteEmail] = useState("");
  const router = useRouter(); // Next.js router for navigation

  useEffect(() => {
    const user = sessionStorage.getItem("userEmail"); // Check session
    if (!user) {
      router.replace("/"); // Redirect to login if not logged in
    }
  }, []);

  useEffect(() => {
    const usersRef = ref(database, "invitedUsers");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList: User[] = Object.keys(data).map((key, index) => ({
          id: key,
          sno: index + 1,
          email: data[key].email,
          name: data[key].name || "-",
          joiningdate: data[key].joiningdate || "-",
          status: data[key].status as "Pending" | "Joined",
          type: data[key].type as "Domain Expert" | "ADMIN" | "In-House Team",
        }));
        setUsers(userList);
      }
    });
  }, []);

  const handleInviteUser = async () => {
    try {
      const newUserRef = push(ref(database, "invitedUsers")); // Create new entry
      await set(newUserRef, {
        email: inviteEmail,
        name: "-",
        joiningdate: "-",
        status: "Pending",
        type: "Domain Expert",
        invitedAt: new Date().toISOString(),
      });

      setInviteEmail(""); // Clear input after invite
    } catch (error) {
      console.error("Error inviting user:", error);
    }
  };

  const handleTypeChange = async (userId: string, newType: "Domain Expert" | "ADMIN" | "In-House Team") => {
    try {
      await update(ref(database, `invitedUsers/${userId}`), {
        type: newType,
      });

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, type: newType } : user
        )
      );
    } catch (error) {
      console.error("Error updating user type:", error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await remove(ref(database, `invitedUsers/${userId}`)); // Delete from Firebase

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Update UI
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <div className="Admin-table" id="customers_table">
        <section className="table__header">
          <div className="input-group">
            <input
              type="email"
              placeholder="Invite Users (Enter Email)"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
            />
            <button onClick={handleInviteUser}>Invite</button>
          </div>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Email</th>
                <th>Name</th>
                <th>Joining Date</th>
                <th>Status</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.sno}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.joiningdate}</td>
                  <td>
                    <p
                      className={`status ${
                        user.status === "Pending" ? "pending" : "joined"
                      }`}
                    >
                      {user.status}
                    </p>
                  </td>
                  <td>
                    <select
                      value={user.type}
                      onChange={(e) =>
                        handleTypeChange(user.id, e.target.value as "Domain Expert" | "ADMIN" | "In-House Team")
                      }
                    >
                      <option value="Domain Expert">Domain Expert</option>
                      <option value="ADMIN">ADMIN</option>
                      <option value="In-House Team">In-House Team</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="Delete-btn"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
