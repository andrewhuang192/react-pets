import '../AuthPage/AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {

    return (
      <main className="AuthPage">
                <h1>AuthPage</h1>
                <SignUpForm />
                <LoginForm setUser={setUser} />
      </main>
    );
  }