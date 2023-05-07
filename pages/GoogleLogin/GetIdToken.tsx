const {GoogleAuth} = require('google-auth-library');


export default async function GetIdToken(url: any) {
    const googleAuth = new GoogleAuth();
    const client = await googleAuth.getClient();
    await client.fetchIdToekn("353509793610-c5v7ue46kae727gfarj698ba6ir1nist.apps.googleusercontent.com");
    console.log('Generated ID token.');
}