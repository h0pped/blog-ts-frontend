import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Heading from '../../components/Typography/Heading/Heading';
import Paragraph from '../../components/Typography/Paragraph/Paragraph';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import { auth } from '../../../utils/firebase.js';

const SignIn = () => {
  const googleProvider = new GoogleAuthProvider();

  const googleLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="h-full flex flex-col  items-center ">
      <div className="w-1/2 flex flex-col  mt-10 drop-shadow-md bg-white rounded-md py-5">
        <Heading className="text-center text-l">Join us today!</Heading>
        <Heading className="text-center text-sm mt-2">
          Sign in with one of our providers
        </Heading>
        <button
          onClick={googleLogIn}
          className="drop-shadow-md bg-white mx-10 mt-5 p-5 rounded-md flex justify-center items-center hover:bg-gray-200 ease-in duration-100 active:bg-gray-300"
        >
          <Paragraph className="text-md">
            <GoogleIcon /> Sign in with Google
          </Paragraph>
        </button>
        <button className="drop-shadow-md bg-white mx-10 mt-5 p-5 rounded-md flex justify-center items-center hover:bg-gray-200 ease-in duration-100 active:bg-gray-300">
          <Paragraph className="text-md">
            <FacebookIcon /> Sign in with Facebook
          </Paragraph>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
