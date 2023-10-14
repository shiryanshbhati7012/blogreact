import {Component} from 'react'
import Api from './Api';
class signup extends Component{ 
 
    
    async register(form){ 
        return Api.post('/singup', form)
    }
    async login(form){ 
        return Api.post('regapi/login', form)
    }
    
    
}
export default signup;
