import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import Input from "../Input";
import Button from "../Button";
import { loginUser } from "../../api/auth";

// Validation schema
const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Show validation errors as toast notifications
  useEffect(() => {
    Object.values(errors).forEach((error) => {
      if (error?.message) {
        toast.error(error.message);
      }
    });
  }, [errors]);

  const onSubmit = async (data: any) => {
    try {
      await loginUser(data);
      toast.success("Login successful!");
      reset(); // Clear input fields after successful login
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h3>Welcome back!</h3>

      {/* Input Container */}
      <div className="input-container">
        <Input placeholder="UID"  type="email" required {...register("email")} />
        <Input placeholder="Password" type="password" required {...register("password")} />
      </div>

      <Button type="submit" isLoading={isSubmitting}>Login</Button>
    </form>
  );
};

export default LoginForm;
