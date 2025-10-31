"use client";

import { ProfileForm } from "@/components/forms/ProfileForm";

export function ProfileClient() {
  const handleSubmit = () => new Promise((resolve) => setTimeout(resolve, 600));

  return (
    <div className="mx-auto max-w-4xl px-4">
      <ProfileForm onSubmit={handleSubmit} />
    </div>
  );
}
