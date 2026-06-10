import { http } from "@/utils";

type ResType<T> = {
  data: T;
  message: string;
};

export type ChannelItem = {
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

export type ListParams = {
  channel_id: string;
  timestamp: string;
};

type ListItem = {
  art_id: string;
  title: string;
  aut_id: string;
  comm_count: number;
  pubdate: string;
  aut_name: string;
  is_top: 0 | 1;
  cover: {
    type: 0 | 1 | 3;
    images: string[];
  };
};

export type ListRes = {
  results: ListItem[];
  pre_timestamp: string;
};

export function fetchListAPI(params: ListParams) {
  return http.request<ResType<ListRes>>({
    url: "/articles",
    params,
  });
}

export type DetailRes = {
  art_id: string;
  title: string;
  pubdate: string;
  content: string;
};

export function fetchDetailAPI(article_id: string) {
  return http.request<ResType<DetailRes>>({
    url: `/articles/${article_id}`,
  });
}