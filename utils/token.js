import jwt from "jsonwebtoken";


export const generateToken=(payload)=>{

    const token = jwt.sign({ payload }, 'jugueteria', {expiresIn:"1d"});
    return token;
}

export const verifyToken = (token) => {
    const tokenverify = jwt.verify(token, 'jugueteria');
    return tokenverify;
  };