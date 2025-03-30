import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';  
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from '../api/auth';
import * as z from 'zod';
import { AuthContext } from '../context/AuthContext';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const { setToken } = useContext(AuthContext)!;
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string, password: string }) => 
      loginUser(email, password),
    onSuccess: (data) => {
      setToken(data.token);
      localStorage.setItem('token', data.token);
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} placeholder="Email" />
        {errors.email && <p>{errors.email.message as string}</p>}

        <input type="password" {...register('password')} placeholder="Password" />
        {errors.password && <p>{errors.password.message as string}</p>}

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;