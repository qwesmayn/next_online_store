import Products from '@/components/Products/Products';
import { brandService } from '@/services/brand.service';
import { deviceService } from '@/services/device.service';

export const revalidate = 3600

export default async function Page() {
  const initialBrands = await brandService.getAll() || [];
  const initialDevices = await deviceService.getAll() || { count: 0, devices: [] };

  return (
    <Products initialBrands={initialBrands} initialDevices={initialDevices} />
  );
}
