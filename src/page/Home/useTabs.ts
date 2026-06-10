import {
  getChannelList as getChannelListApi,
  type ChannelItem,
} from "@/api/list";
import { useState } from "react";
export function useTabs() {
  const [channelList, setChannelList] = useState<ChannelItem[]>([]);

  useState(() => {
    async function getChannelList() {
      const res = await getChannelListApi();
      console.log();
      setChannelList(res.data.data.channels);
    }
    getChannelList();
  });
  return { channelList };
}
