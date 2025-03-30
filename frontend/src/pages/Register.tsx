import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '../api/auth';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string, password: string }) =>
      registerUser(email, password),
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" {...register('password')} placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit" disabled={mutation.status === 'pending'}>Register</button>
      </form>
    </div>
  );
};

export default Register;
