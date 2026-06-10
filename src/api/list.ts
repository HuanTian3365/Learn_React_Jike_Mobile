import { http } from "@/utils";

type ResType<T> = {
  data: T;
  message: string;
};

type ChannelItem = {
  id: number;
  name: string;
};

type ChannelRes = {
  channels: ChannelItem[];
};


export function getChannelList() {
  return http.request<ResType<ChannelRes>>({
    url: "/api/channels",
    method: "GET",
  });
}