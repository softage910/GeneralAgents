import SignIn from "./auth/signin";
import './auth/signin.css';
import { Suspense } from "react";
import MobileScreen from "./dashboard/pages/MobileScreen";


export default function Home() {
  return (
    <>
    <div className="hidden max-[900px]:block">
  <MobileScreen />
</div>
<div className="block max-[900px]:hidden">
      <Suspense fallback={<div>Loading...</div>}>
<SignIn/>
    </Suspense>

</div>
    </>
  );
}
