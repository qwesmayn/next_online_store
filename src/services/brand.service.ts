import axios from 'axios';
import { IBrand } from './../types/brand.interface';
export const brandService = {
    async getAll(){
        try {
            const response = await axios.get<IBrand[]>(
               `${process.env.NEXT_PUBLIC_API_URL}/brand`
            )
            return response.data
        } catch (error) {
            console.error('Error fetching brands:', error);
        }
    }
}
