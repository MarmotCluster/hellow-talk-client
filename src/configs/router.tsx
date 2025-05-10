import Chat from '@/pages/chat';
import Chats from '@/pages/chats';
import Contacts from '@/pages/contacts';
import Profile from '@/pages/profile';
import Redirect from '@/pages/Redirect';
import SignIn from '@/pages/sign-in';
import SignUp from '@/pages/sign-up';

export default [
  { path: '/', Component: Redirect },
  { path: '/login', Component: SignIn },
  { path: '/sign-up', Component: SignUp },
  { path: '/contacts', Component: Contacts },
  { path: '/chats', Component: Chats },
  { path: '/profile', Component: Profile },
  { path: '/chat', Component: Chat },
];
