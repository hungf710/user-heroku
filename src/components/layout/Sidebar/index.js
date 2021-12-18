import React, {useState} from 'react'
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
	PieChartOutlined,
	PicCenterOutlined,
	TeamOutlined,
	BarChartOutlined,
	OrderedListOutlined,
  } from '@ant-design/icons';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import haivan from "../../../assets/images/logo.HV.svg";

const { Sider} = Layout;
const { SubMenu } = Menu;

const Sidebar = ({className}) => {

    const [collapsed,setCollapsed] = useState(false);
		
	const toggle = () => {
		setCollapsed(!collapsed);
	};

    return (
        <div>
            <Sider trigger={null} collapsible collapsed={collapsed} >
                <div style={{display:"flex",height:50, paddingTop:15}}>
                    { 
                        collapsed ? "" : <div className="header" style={{width:"85%"}}><img alt="HAI VAN" className="logoHV" src={haivan} /></div>
                    }
                    <div className="site-layout-background" style={{left: 0,marginTop:-13, paddingRight: 15}} onClick={toggle}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                        })}
                    </div>
                </div>

                <Menu  defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor:'#f0f2f5'}}>
                <Menu.Item key="2" icon={<TeamOutlined />}><Link to="/nhan_vien"> Nhân Viên </Link></Menu.Item>
                    <SubMenu className="sub-menu" key="sub1" icon={<AppstoreOutlined />} title="Đơn hàng">
                        <Menu.Item key="3"><Link to="/nhan_hang">Nhận hàng</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/phat_hang">Phát hàng</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/kho_tong">Kho tổng</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu className="sub-menu" key="sub2" icon={<PicCenterOutlined />} title="Đặt hàng">
                        <Menu.Item key="6">Yêu cầu đặt hàng</Menu.Item>
                        <Menu.Item key="7">Danh sách đơn gửi</Menu.Item>
                        <Menu.Item key="8">Kho tổng</Menu.Item>
                    </SubMenu>
                    <SubMenu className="sub-menu" key="sub3" icon={<PieChartOutlined />} title="Phát hàng tại nhà">
                        <Menu.Item key="9">Danh sách phát</Menu.Item>
                        <Menu.Item key="10">Bảng kê phát</Menu.Item>
                        <Menu.Item key="11">Bàn giao văn phòng</Menu.Item>
                        <Menu.Item key="12">Thu tiền shipper</Menu.Item>
                    </SubMenu>
                    <SubMenu className="sub-menu" key="sub4" icon={<BarChartOutlined />} title="Vận hành">
                        <Menu.Item key="13">Xe tuyến</Menu.Item>
                        <Menu.Item key="14">Trung chuyển</Menu.Item>
                        <Menu.Item key="15">Nhập hàng</Menu.Item>
                        <Menu.Item key="16">Điều độ</Menu.Item>
                        <SubMenu className="sub-menu2" key="sub5" title="CSKH">
                            <Menu.Item key="17">Option 11</Menu.Item>
                            <Menu.Item key="18">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <Menu.Item key="19" icon={<OrderedListOutlined />}><Link to="/todo_list">Todo List</Link></Menu.Item>
                    <Menu.Item key="20" icon={<OrderedListOutlined />}><Link to="/mounted">Mounted</Link></Menu.Item>

                </Menu>
            </Sider>
                
        </div>
    )
};

export default styled(Sidebar)`
.ant-layout-sider ant-layout-sider-dark{
    height:200vh;
}
`;

