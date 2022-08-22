
import './App.css';
import { Stack } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response: any) => {
  console.log(response);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Stack direction="horizontal" gap={2}>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </Stack> </p>
      </header>
    </div>
  );
}

export default App;
