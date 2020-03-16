import axios from 'axios'
import Cookies from 'universal-cookie';

const API_URL = 'http://localhost:8080'
const cookies = new Cookies();

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN = 'token'

class AuthenticationService {}

export default new AuthenticationService()