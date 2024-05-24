import axiosInstance from '../axios/axiosInstance';

const storeBlog = (payload) => {
    axiosInstance.post('/blogs/store', payload);
}

export default { createImageBitmap };