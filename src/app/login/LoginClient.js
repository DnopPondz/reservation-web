"use client";

import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/forms/AuthCard";
import { api } from "@/lib/api";
import { useAuth } from "@/store/auth-context";

export function LoginClient() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (formState) => {
    const response = await login(formState, async (payload) => {
      try {
        return await api.login(payload);
      } catch (error) {
        console.warn("API login failed, using demo account.", error);
        return {
          token: "demo-token",
          user: {
            id: "demo-user",
            name: "Demo Guest",
            email: payload.email,
            role: "user",
          },
        };
      }
    });
    if (response?.user?.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/reservation");
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4">
      <AuthCard type="login" onSubmit={handleLogin} />
    </div>
  );
}
