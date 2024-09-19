import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://g806lggja3.execute-api.us-east-1.amazonaws.com/dev',
});

export async function getDistancePrice(origin, destination) {
  const params = { origin, destination };
  try {
    const response = await axios.post('/distance', params);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
