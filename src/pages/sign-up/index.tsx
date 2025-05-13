import Logo from '@/components/common/Logo';
import TextField from '@/components/common/TextField';
import SteeredContainer from '@/components/layout/SteeredContainer';
import useAuth from '@/hooks/useAuth';
import { behave } from '@/utils';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

type Form = Record<
  'legalname' | 'username' | 'password' | 'confirmPassword',
  string
>;

const SignUp = () => {
  /* states */

  const [form, setForm] = useState<Form>({
    legalname: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  /* hooks */

  const navigate = useNavigate();

  const { register } = useAuth();

  /* functions */

  const handleChange = (e: React.FormEvent) => {
    const input = e.target as HTMLInputElement;
    const key = input.id! as keyof Form;

    setForm((v) => ({ ...v, [key]: input.value }));
  };

  const handleSignUp = () => {
    const { legalname: name, username, password, confirmPassword } = form;
    if (
      !name.length ||
      !username.length ||
      !password.length ||
      !confirmPassword.length
    )
      return;

    if (password !== confirmPassword) {
      toast.error('passwords mismatching.');
      return;
    }

    behave(
      () => register(name, username, password),
      () => {
        toast.success('registed. please login.');
        navigate('/login', { replace: true });
      }
    );
  };

  /* renders */

  return (
    <SteeredContainer direction="column" className="p-2rem bg-primary">
      <Logo />

      <div
        className="flexy fd-column space-1rem full-width"
        style={{ paddingTop: 40 }}
      >
        <TextField
          id="legalname"
          placeholder="Legal Name"
          value={form.legalname}
          onChange={handleChange}
        />

        <TextField
          id="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <TextField
          type="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <TextField
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button className="auth-button" onClick={handleSignUp}>
          Sign Up
        </button>

        <p
          className="auth-button__textButton active-button"
          onClick={() => navigate('/login')}
        >
          already have a account? <b>Log In</b>
        </p>
      </div>
    </SteeredContainer>
  );
};

export default SignUp;
