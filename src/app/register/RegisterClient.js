"use client";

import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/forms/AuthCard";
import { api } from "@/lib/api";
import { useAuth } from "@/store/auth-context";

export function RegisterClient() {
  const router = useRouter();
  const { login } = useAuth();

  const handleRegister = async (formState) => {
    const payload = { ...formState, role: "user" };
    const response = await login(payload, async () => {
      try {
        return await api.register(payload);
      } catch (error) {
        console.warn("API register failed, using demo account.", error);
        return {
          token: "demo-token",
          user: {
            id: "demo-user",
            name: payload.username,
            email: payload.email,
            role: "user",
          },
        };
      }
    });
    if (response?.user) {
      router.push("/reservation");
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4">
      <AuthCard type="register" onSubmit={handleRegister} />
    </div>
  );
}
