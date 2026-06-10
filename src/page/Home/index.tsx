
import "./style.css";
import { Tabs } from "antd-mobile";
import { useTabs } from "./useTabs";

export default function Home() {
  const { channelList } = useTabs();
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
