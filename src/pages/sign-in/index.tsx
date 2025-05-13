import Logo from '@/components/common/Logo';
import TextField from '@/components/common/TextField';
import SteeredContainer from '@/components/layout/SteeredContainer';
import useAuth from '@/hooks/useAuth';
import { behave } from '@/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router';

type Form = { username: string; password: string };

const SignIn = () => {
  /* states */

  const [form, setForm] = useState<Form>({
    username: '',
    password: '',
  });

  /* hooks */

  const navigate = useNavigate();

  const { login } = useAuth();

  /* functions */

  const handleChange = (e: React.FormEvent) => {
    const input = e.target as HTMLInputElement;
    const key = input.id! as keyof Form;

    setForm((v) => ({ ...v, [key]: input.value }));
  };

  const handleSignIn = () => {
    const { username, password } = form;
    if (!username.length || !password.length) return;

    behave(
      () => login(username, password),
      () => navigate('/contacts')
    );
  };

  /* effects */

  /* renders */

  return (
    <SteeredContainer direction="column" className="p-2rem bg-primary">
      <Logo />

      <div
        className="flexy fd-column space-1rem full-width"
        style={{ paddingTop: 40 }}
      >
        <TextField
          type="text"
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

        <button className="auth-button" onClick={handleSignIn}>
          Log In
        </button>

        <p
          className="auth-button__textButton active-button"
          onClick={() => navigate('/sign-up')}
        >
          have no account? <b>Register</b>
        </p>
      </div>
    </SteeredContainer>
  );
};

export default SignIn;
