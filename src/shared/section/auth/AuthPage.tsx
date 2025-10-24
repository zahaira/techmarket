import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/TextInput";
import { CustomButton } from "@/components/CustomButton";
import { useTranslations } from "next-intl";

interface AuthPageProps {
  onClose: () => void;
}
export const PersonalInfoSchema = zod.object({
  firstName: zod.string().min(1, { message: "Name is required!" }),
  lastName: zod.string().min(1, { message: "Name is required!" }),
  email: zod
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Email must be a valid email address!" }),
  password: zod
    .string()
    .min(1, { message: "Password is required!" })
    .min(6, { message: "Password must be at least 6 characters!" }),
});
export type PersonalInfoType = zod.infer<typeof PersonalInfoSchema>;

const AuthPage = ({ onClose }: AuthPageProps) => {
  const tAuth = useTranslations("auth");
  const tBtn = useTranslations("buttons");
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const defaultValues = {
    firstName: "ddd",
    lastName: "ddd",
    email: "aaa@gmail.com",
    password: "123456789",
  };
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<PersonalInfoType>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues,
  });

  const onSubmit = (data: PersonalInfoType) => {};

  return (
    <div className="h-[calc(100vh-2rem)] relative  overflow-y-auto p-6 md:w-[600px] flex justify-center">
      <div className="mb-4">
        <button
          onClick={onClose}
          aria-label="Close wishlist"
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-50 transition cursor-pointer"
        >
          <FiX className="text-gray-500 text-2xl" />
        </button>
      </div>
      <div className="max-w-md w-full p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          {activeTab === "login" ? tAuth("login") : tAuth("signup")}
        </h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 justify-center mb-12">
          {["login", "signup"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "login" | "signup")}
              className={`pb-3 px-4 font-semibold transition-all relative ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              }`}
            >
              {tab === "login" ? tAuth("login") : tAuth("signup")}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t" />
              )}
            </button>
          ))}
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {activeTab === "signup" && (
            <div className="flex flex-col gap-5">
              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState }) => (
                  <TextInput
                    label={tAuth("first_name")}
                    {...field}
                    error={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field, fieldState }) => (
                  <TextInput
                    label={tAuth("last_name")}
                    {...field}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <TextInput
                  label={tAuth("email")}
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <TextInput
                  label={tAuth("password")}
                  {...field}
                  type="password"
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
          <CustomButton type="submit">{tBtn("submit")} </CustomButton>
        </form>

        <div className="text-center text-gray-500 text-sm">
          {activeTab === "login" ? (
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-1 justify-center">
                <span>{tAuth("no_account")}</span>
                <button
                  className="text-primary-dark hover:underline  cursor-pointer"
                  onClick={() => setActiveTab("signup")}
                >
                  {tAuth("signup")}
                </button>
              </div>
              <button className="text-primary-dark hover:underline  cursor-pointer">
                {tAuth("forgot_password")}
              </button>
            </div>
          ) : (
            <div className="flex gap-1 justify-center">
              <span> {tAuth("already_have_account")}</span>
              <button
                className="text-primary-dark hover:underline cursor-pointer"
                onClick={() => setActiveTab("login")}
              >
                {tAuth("login")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
