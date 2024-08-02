import Landing from "@/components/Landing/Landing";
import { deviceService } from "@/services/device.service";

export default async function Home() {
  const data = await deviceService.getByParams({ limit: 4 });

  return (
    <div>
    { data &&  <Landing data = {data}/>}
    </div>
  );
}
