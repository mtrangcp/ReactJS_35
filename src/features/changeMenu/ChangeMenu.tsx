import {
  DashboardOutlined,
  DollarOutlined,
  FileOutlined,
  LeftOutlined,
  LineChartOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../stores/store";
import { changeStatus } from "./changeMenu";

export default function ChangeMenu() {
  const { collapse } = useSelector((state: RootState) => state.changeMenu);

  const dispath = useDispatch();

  return (
    <div className="menu">
      <div className="item-menu">
        <DashboardOutlined className="format" />
        <span hidden={collapse}>Bang dieu khien</span>
      </div>
      <div className="item-menu">
        <UserOutlined className="format" />
        <span hidden={collapse}>Tai khoan</span>
      </div>
      <div className="item-menu">
        <DollarOutlined className="format" />
        <span hidden={collapse}>Tai san</span>
      </div>
      <div className="item-menu">
        <LineChartOutlined className="format" />
        <span hidden={collapse}>Thong ke</span>
      </div>
      <div className="item-menu">
        <FileOutlined className="format" />
        <span hidden={collapse}>Tai lieu</span>
      </div>
      <div className="item-menu">
        {collapse ? (
          <RightOutlined
            onClick={() => dispath(changeStatus())}
            className="collapse format"
          />
        ) : (
          <LeftOutlined
            onClick={() => dispath(changeStatus())}
            className="collapse format"
          />
        )}

        <span hidden={collapse}>Thu gon</span>
      </div>
    </div>
  );
}
