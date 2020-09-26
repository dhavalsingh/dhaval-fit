import React from "react";
import { Table, Card, Row, Col, Avatar, Tag, Popover } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const { Meta } = Card;
const columns = [
	{
		title: "Meal",
		dataIndex: "meal",
		key: "meal",
	},
	{
		title: "Calories",
		dataIndex: "cal",
		key: "cal",
	},
	{
		title: "Macros",
		dataIndex: "mac",
		key: "mac",
	},
];
const column = [
	{
		title: "Exercise",
		dataIndex: "exe",
		key: "exe",
	},
	{
		title: "Reps",
		dataIndex: "rep",
		key: "rep",
	},
	{
		title: "Set RM",
		dataIndex: "set",
		key: "set",
	},
];
const datas = [
	{
		key: "1",
		exe: "Bench Press",
		rep: "15-12-10",
		set: "40 KG",
		description: "Form on last set",
	},
	{
		key: "2",
		exe: "Bench Press",
		rep: "15-12-10",
		set: "40 KG",
		description: "Form on last set",
	},
	{
		key: "3",
		exe: "Bench Press",
		rep: "15-12-10",
		set: "40 KG",
		description: "Form on last set",
	},
	{
		key: "4",
		exe: "Bench Press",
		rep: "15-12-10",
		set: "40 KG",
		description: "Form on last set",
	},
];
const data = [
	{
		key: "1",
		meal: "Breakfast",
		cal: 400,
		mac: "30P 42C 18F",
		description: "Chicken grilled sandwich",
	},
	{
		key: "2",
		meal: "Lunch",
		cal: 400,
		mac: "30P 42C 18F",
		description: "Chicken grilled sandwich",
	},
	{
		key: "3",
		meal: "Snack",
		cal: 400,
		mac: "30P 42C 18F",
		description: "Chicken grilled sandwich",
	},
	{
		key: "4",
		meal: "Dinner",
		cal: 400,
		mac: "30P 42C 18F",
		description: "Chicken grilled sandwich",
	},
];

function ExtraInfo({ value, url, size }) {
	return (
		<div className="extraInfo">
			<Avatar className="transform" size={size ? size : "large"} src={url} />
			<p className="extraText">{value}</p>
		</div>
	);
}

function InfoCard({}) {
	const popTitle = (
		<div style={{textAlign:"center"}}>Total Macros</div>
	)
	const macros = (
		<div className="infoPop">
			<ExtraInfo
				value="170"
				url="https://www.flaticon.com/svg/static/icons/svg/780/780118.svg"
				size="large"
			/>
			<ExtraInfo
				value="60"
				url="https://www.flaticon.com/svg/static/icons/svg/2599/2599597.svg"
				size="large"
			/>

			<ExtraInfo
				value="170"
				url="https://www.flaticon.com/svg/static/icons/svg/1276/1276022.svg"
				size="large"
			/>
		</div>
	);
	return (
		<div>
			<div className="dayTag">
				<Tag icon={<CalendarOutlined />} color="rgb(169 168 212)">
					Day 1
				</Tag>
			</div>
			<div className="cardCont">
				<Card
					title={
						<Meta
							className="workCardMeta"
							avatar={
								<Avatar
									className="transform"
									size="large"
									src="https://www.flaticon.com/svg/static/icons/svg/608/608857.svg"
								/>
							}
							title={<h3 className="cardTitle"></h3>}
						/>
					}
					bordered={false}
					style={{
						width: "95%",
						margin: "0 auto",
						borderRadius: "10px",
						boxShadow: "0 3px 25px rgba(0, 0, 0, 0.1)",
					}}
					className="nutCard"
				>
					<Row>
						<Col span="6">
							<img
								style={{
									objectFit: "contain",
									maxWidth: "200px",
									maxHeight: "300px",
								}}
								src={require("./day1.jpg")}
							/>
						</Col>
						<Col span="12">
							<Table
								columns={columns}
								dataSource={data}
								expandable={{
									expandedRowRender: (record) => (
										<p style={{ margin: 0 }}>{record.description}</p>
									),
								}}
								pagination={{ position: ["none", "bottomCenter"] }}
							/>
						</Col>
						<Col span="6" style={{ justifyContent: "center", display: "grid" }}>
							<Popover
								placement="rightTop"
								content={macros}
								title={popTitle}
								trigger="hover"
							>
								<div>
									<ExtraInfo
										url="https://www.flaticon.com/svg/static/icons/svg/2862/2862227.svg"
										value="1750 kcal"
									/>
								</div>
							</Popover>
							<ExtraInfo
								url="https://www.flaticon.com/svg/static/icons/svg/1349/1349981.svg"
								value="400 kcal"
							/>
							<ExtraInfo
								url="https://www.flaticon.com/svg/static/icons/svg/32/32523.svg"
								value="10000"
							/>
							<ExtraInfo
								url="https://www.flaticon.com/svg/static/icons/svg/3017/3017682.svg"
								value="3.7L"
							/>
							<ExtraInfo
								url="https://www.flaticon.com/svg/static/icons/svg/3511/3511106.svg"
								value="8Hrs"
							/>
						</Col>
					</Row>
				</Card>
				<Card
					title={
						<Meta
							className="workCardMeta"
							avatar={<Avatar size="large" src={require("./dumbell.gif")} />}
							title={<h3 className="cardTitle"></h3>}
						/>
					}
					bordered={false}
					style={{
						width: "100%",
						margin: "0 auto",
						borderRadius: "10px",
						boxShadow: "0 3px 25px rgba(0, 0, 0, 0.1)",
					}}
				>
					<div className="workCard">
						<Table
							columns={column}
							dataSource={datas}
							expandable={{
								expandedRowRender: (record) => (
									<p style={{ margin: 0 }}>{record.description}</p>
								),
							}}
							pagination={{ position: ["none", "bottomCenter"] }}
						/>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default InfoCard;
