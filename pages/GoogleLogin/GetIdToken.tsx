const {GoogleAuth} = require('google-auth-library');


export default async function GetIdToken(url: any) {
    const googleAuth = new GoogleAuth();
    const client = await googleAuth.getClient();
    await client.fetchIdToekn(url);
    console.log('Generated ID token.');
}