import axios from 'axios';

const followOwner = async (token, id) => {
    try {
        const response = await axios.post(
            `https://sakanat-dev.azurewebsites.net/api/user-following/follow/${id}`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Server responded with:', error.response.status, error.response.data);
        }
    }
}

export default followOwner;
