import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { apiUrl } from '../constant/constants';
import axiosInstance from '../constant/constants';
const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const newsList = async () => {
            try {
                const response = await axiosInstance.get(`${apiUrl}${url}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
                setLoading(false);
            }
        }
        newsList();
    }, [url, id]);

    return { data, loading };
}
export default useFetchData;