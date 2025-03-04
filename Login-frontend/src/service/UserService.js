import axios from "axios";

class UserService {
    static BASE_URL = "http://localhost:8084"

    static async login(email, password){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, {email, password})
            return response.data;

        }catch(err){
            throw err;
        }
    }
  }

  export default UserService;
  