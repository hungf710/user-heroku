import './App.css';

import Sidebar from './components/layout/Sidebar';
import Users from './components/Users';
import TodoList from './components/TodoList';
import Mounted from './components/Mounted';
import {Route,Routes} from "react-router-dom";
import { Layout,
	Row,
	Col,
	Input,
	Tooltip,
	Breadcrumb } from 'antd';

import {
	SearchOutlined,
} from '@ant-design/icons';
import Test from './components/Test';

const { Header } = Layout;

function App() {
	return (
		<div className="App1" style={{display:'flex'}}>
			
			<Sidebar />
			<Layout>
				<Header>
					<Row gutter={15} className="d-flex align-items-center" style={{height:50}} >
						<Col md={18} className="customerHome" style={{ display: 'flex', justifyContent: 'flex-start', flex: 1, alignItems: 'center', paddingRight: 20 }}>
							<Breadcrumb separator="/">
								<Input
									style={{
										height: "35px",
										width: "350px",
										background: "#FFFFFF",
										border: "1px solid #EDEBE9",
										boxSizing: "border-box",
										borderRadius: "4px"
									}}
									prefix={<SearchOutlined className="site-form-item-icon" />}
									placeholder="Tìm kiếm dữ liệu"
								/>
							</Breadcrumb>
						</Col>
						<Col md={6} style={{ display: 'flex', justifyContent: 'flex-end', flex: 1, alignItems: 'center', paddingRight: 20 }}>
							Xin Chào Admin
							<Tooltip placement="topLeft" title="Đăng Xuất"> </Tooltip>
						</Col>
					</Row>
				</Header>
				<Routes>
					<Route exact path="/nhan_vien" element={<Users />}></Route>
					<Route exact path="/test" element={<Test />}></Route>
					<Route exact path="/todo_list" element={<TodoList />}></Route>
					<Route exact path="/mounted" element={<Mounted />}></Route>
				</Routes>
			</Layout>
			
		</div>
	);
}

export default App;
