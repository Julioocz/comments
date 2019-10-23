import ky from "ky";

const backendURL = process.env.BACKEND_URL || "http://localhost:3001"

export default ky.create({ prefixUrl: backendURL });
