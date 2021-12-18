import React,{memo,useEffect,useState,useCallback } from 'react';
import { Table} from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Contents = memo(({className  ,headerTable}) => {
	const [data, setData] = useState([]);
	const getData = useCallback(()=> {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				const persons = res.data;
				setData(persons);
			})
			.catch(error => console.log(error));
	},[]);
	useEffect(() => {
		getData();
	},[])

	//console.log("aaaa");

	const columns = [
		{
			title: 'Stt',
			align: 'Center',
			key: 'id',
			render:(text, record, index) => {
				return (
					<div>{index+1}</div>
				)
			}
		},
		{
			title: 'Tên',
			dataIndex: '',
			key: 'name',
			render:(text, record, index) => {
				return (
					<div>{record.name}</div>
				)
			}
		},
		{
			title: 'Sđt',
			dataIndex: 'phone',
			key: 'phone',
			render:(text, record, index) => {
				return (
					<div>{record.phone}</div>
				)
			}
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
            render:(text, record, index) => {
				return (
					<div>{record.email}</div>
				)
			}
		},
		{
			title: 'Địa chỉ',
			dataIndex: 'address',
			key: 'address',
            render:(text, record, index) => {
				return (
					<div>{record.address.city}</div>
				)
			}
		},
	];
	return (
		<div className={className}  >
		<Table columns={columns} dataSource={data} />
		</div>
	)
})
Contents.propTypes = {
		className: PropTypes.any,   
};

export default styled(Contents)`
	
`;

