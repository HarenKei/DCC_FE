// import GoogleLogin from "react-google-login";
// import {useCallback} from "react";

// export const TestLogin = ({setUserInfo, setIsLogin} : any) => {

//     const googleLogin = useCallback((response : any) => {
//         const userInfo = {
//             profileImg: response.profileObj.imageUrl,
//             email: response.profileObj.email,
//             name: response.profileObj.name
//         }
//         setUserInfo(userInfo);
//         setIsLogin(true);
//     }, [])

//     return (
//         <GoogleLogin
//             clientId="353509793610-c5v7ue46kae727gfarj698ba6ir1nist.apps.googleusercontent.com"
//             buttonText="Login"
//             onSuccess={googleLogin}
//             onFailure={(res) => console.log(res)}
//             cookiePolicy={'single_host_origin'}/>
//     );
// }

// export default TestLogin;