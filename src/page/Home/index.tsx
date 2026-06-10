import "./style.css";
import { Tabs } from "antd-mobile";
import { useTabs } from "./useTabs";
import HomeList from "./HomeList";

export default function Home() {
  const { channelList } = useTabs();
  return (
    <div>
      <div className="tabContainer">
        <Tabs defaultActiveKey={'0'}>
          {channelList.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              <div className="listContainer">
                <HomeList id={item.id + ""} />{" "}
              </div>
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
