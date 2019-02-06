import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 910928052572d85d8e8269b91a6e6a711d2c4e40ec7ba94fef29f87ade38f12a',
  }
});
