import { fetchDetailAPI, type DetailRes } from "@/api/list";
import { NavBar } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Detail() {
  const [detail, setDetail] = useState<DetailRes | null>(null);
  const [params] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    async function fetchDetail() {
      const res = await fetchDetailAPI(id!);
      setDetail(res.data.data);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    id && fetchDetail();
  }, [id]);

  const navigate = useNavigate();
  const back = () => navigate(-1);
  if (!detail) {
    return <div>this is loading</div>;
  }
  return (
    <div>
      <NavBar onBack={back}>{detail.title}</NavBar>
      <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
    </div>
  );
}
