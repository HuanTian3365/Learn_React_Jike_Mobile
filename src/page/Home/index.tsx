import "./style.css";
import { Tabs } from "antd-mobile";
import { useTabs } from "./useTabs";
import HomeList from "./HomeList";

export default function Home() {
  const { channelList } = useTabs();
  return (
    <div>
      <div className="tabContainer">
        <Tabs>
          {channelList.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              <HomeList id={item.id} />
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
