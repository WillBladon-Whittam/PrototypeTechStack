import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) return <p>You must be logged in</p>;

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h1>Welcome, {session.user.email}</h1>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</button>
    </div>
  );
}
