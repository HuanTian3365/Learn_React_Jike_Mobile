import { fetchListAPI, type ListRes } from "@/api/list";
import { useEffect, useState } from "react";
import { List, Image } from "antd-mobile";

export default function HomeList({ id }: { id: string }) {
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });

  useEffect(() => {
    const getList = () => {
      fetchListAPI({
        channel_id: id,
        timestamp: "" + new Date().getTime(),
      }).then((res) => {
        console.log(res.data);
        setListRes(res.data.data);
      });
    };
    getList();
  }, [id]);

  return (
    <div>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={<Image src={item.cover.images?.[0]} 
            
              style={{ width: 40, height: 40 }}
              fit="cover"

            />}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}
