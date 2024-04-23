import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('A passionate developer.');

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Add profile update logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <form onSubmit={handleSave}>
          {/* ... rest of the form ... */}
        </form>
      </div>
    </div>
  );
}
