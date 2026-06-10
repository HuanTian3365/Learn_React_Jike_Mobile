import {
  getChannelList as getChannelListApi,
  type ChannelItem,
} from "@/api/list";
import "./style.css";
import { Tabs } from "antd-mobile";
import { useState } from "react";

export default function Home() {
  const [channelList, setChannelList] = useState<ChannelItem[]>([]);

  useState(() => {
    async function getChannelList() {
      const res = await getChannelListApi();
      console.log();
      setChannelList(res.data.data.channels);
    }
    getChannelList();
  });
  return (
    <div>
      <div className="tabContainer">
        <Tabs>
          {channelList.map((item) => (
            <Tabs.Tab title={item.name} key={item.id} />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
