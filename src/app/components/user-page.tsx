import Logout from "./logout";

export default function UserPage({ name }: { name: string }) {
  return (
    <div>
      <p>Hello {name}. Features coming soon.</p>
      <Logout/>
    </div>
  );
};