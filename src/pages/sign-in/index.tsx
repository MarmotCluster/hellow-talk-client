import Logo from '@/components/common/Logo';
import TextField from '@/components/common/TextField';
import SteeredContainer from '@/components/layout/SteeredContainer';
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

  /* functions */

  const handleChange = (e: React.FormEvent) => {
    const input = e.target as HTMLInputElement;
    const key = input.id! as keyof Form;

    setForm((v) => ({ ...v, [key]: input.value }));
  };

  /* renders */

  return (
    <SteeredContainer direction="column" className="p-2rem">
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

        <button
          style={{
            width: '100%',
            padding: '1rem',
            borderRadius: '.5rem',
            outline: 'none',
            border: '1px solid #204ce9',
            backgroundColor: '#2552f4',
            color: '#f4f4f4',
            boxShadow: '0 12px 32px 2px rgba(0,0,0,0.16)',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 12,
          }}
          onClick={() => navigate('/contacts')}
        >
          Log In
        </button>

        <p
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            userSelect: 'none',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/sign-up')}
        >
          create account
        </p>
      </div>
    </SteeredContainer>
  );
};

export default SignIn;
