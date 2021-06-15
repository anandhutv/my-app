import axios from 'axios'
import {baseUrl} from './constants/constants'
const instance = axios.create({
    ins: baseUrl,
  });
  
  export default instance