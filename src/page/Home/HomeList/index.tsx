import { fetchListAPI, type ListRes } from "@/api/list";
import { useEffect, useState } from "react";
import { List, Image, InfiniteScroll } from "antd-mobile";
import { useNavigate } from "react-router-dom";

export default function HomeList({ id }: { id: string }) {
  const navigate = useNavigate();
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });
  const [hasMore, setHasMore] = useState(true);

  async function getList() {
    fetchListAPI({
      channel_id: id,
      timestamp: listRes.pre_timestamp,
    }).then((res) => {
      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp,
      });
      setHasMore(res.data.data.results.length > 0);
    });
  }

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

  const goToDetail = (id: string) => {
    navigate(`/detail?id=${id}`);
    console.log("goToDetail");
  };

  return (
    <div>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            onClick={() => goToDetail(item.art_id)}
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ width: 40, height: 40 }}
                fit="cover"
              />
            }
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={getList} hasMore={hasMore} threshold={10} />
    </div>
  );
}
