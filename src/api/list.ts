import { http } from "@/utils";

type ResType<T> = {
  data: T;
  message: string;
};

export  type ChannelItem = {
  id: number;
  name: string;
};

type ChannelRes = {
  channels: ChannelItem[];
};


export function getChannelList() {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
    method: "GET",
  });
}