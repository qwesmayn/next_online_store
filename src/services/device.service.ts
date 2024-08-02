import axios from 'axios';
import { IDevice } from '@/types/device.interface';

export const deviceService = {
  async getAll(): Promise<IDevice | undefined> {
    try {
      const response = await axios.get<IDevice>(
        `${process.env.NEXT_PUBLIC_API_URL}/device`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  },

  async getByParams({ limit, page, id, typeId, brandId, minPrice, maxPrice }: { limit?: number, page?: number, id?: number, typeId?: number, brandId?: number[], minPrice? : number, maxPrice? : number, }): Promise<IDevice | undefined> {
    try {
      const params: any = {};
      if (limit !== undefined) params.limit = limit;
      if (page !== undefined) params.page = page;
      if (id !== undefined) params.id = id;
      if (typeId !== undefined) params.typeId = typeId;
      if (minPrice !== undefined) params.minPrice = minPrice;
      if (maxPrice !== undefined) params.maxPrice = maxPrice;
      if (brandId !== undefined && brandId.length > 0) params.brandId = brandId.join(',');

      const response = await axios.get<IDevice>(
        `${process.env.NEXT_PUBLIC_API_URL}/device`,
        {
          params: params
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching devices by params:', error);
    }
  }
};
