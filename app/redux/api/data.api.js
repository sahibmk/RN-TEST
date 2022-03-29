import Axios from 'axios';
import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';
import { setData } from '../actions';



export async function getHeroes(dispatch) {
  const response = await Axios.get(`https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes`);
  dispatch(setData(response.data));
}
