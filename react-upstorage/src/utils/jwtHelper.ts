import jwtDecode from "jwt-decode";

export function getClaimsFromJwt(token:string){
    const decodedJwt=jwtDecode(token);
    
    if(!decodedJwt || typeof decodedJwt !=="object") 
        return {};

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignores
    const {uid, email,given_name,family_name,jti} = decodedJwt

    return {
        uid,
        email,
        given_name,
        family_name,
        jti
    }
}