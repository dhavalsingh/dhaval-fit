import React from "react";
import { Layout, Menu, Carousel, Card, Row, Col, Statistic } from "antd";
import { Line } from "@ant-design/charts";
import {
	ArrowUpOutlined,
	ArrowDownOutlined,
	VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
import { ReactComponent as Main } from "./main.svg";
import { ReactComponent as Goal } from "./goal.svg";
import InfoCard from "./infoCard";
import "./styles.css";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function FrontPage() {
	const contentStyle = {
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "white",
	};
	const data = [
		{ year: "1991", value: 3 },
		{ year: "1992", value: 4 },
		{ year: "1993", value: 3.5 },
		{ year: "1994", value: 5 },
		{ year: "1995", value: 4.9 },
		{ year: "1996", value: 6 },
		{ year: "1997", value: 7 },
		{ year: "1998", value: 9 },
		{ year: "1999", value: 13 },
	];
	const config = {
		data,
		title: {
			visible: true,
			text: "Weight Loss Curve",
		},
		xField: "year",
		yField: "value",
	};
	return (
		<Layout className="layout">
			<Header>
				<div className="logo" />
				<Menu
					theme="dark"
					className="nav"
					mode="horizontal"
					defaultSelectedKeys={["1"]}
				>
					<Menu.Item key="1">Dashboard</Menu.Item>
					<Menu.Item key="2">Nutrition</Menu.Item>
					<Menu.Item key="3">Workout</Menu.Item>
				</Menu>
			</Header>
			<Content>
				<div className="site-layout-content">
					<div className="header">
						<h1>60 Days to glory</h1>
						<div>
							<img className="mainSvg" src={require("./gym1.gif")} />
							{/* 							<Main className="mainSvg" />
							 */}{" "}
						</div>
						<div className="site-statistic-demo-card">
							<Row gutter={16}>
								<Col span={8}>
									<Card>
										<Statistic
											title="Start"
											value={84.4}
											precision={1}
											valueStyle={{ color: "#3f8600" }}
											prefix={<ArrowUpOutlined />}
											suffix="Kg"
										/>
									</Card>
								</Col>
								<Col span={8}>
									<Card>
										<Statistic
											title="Current"
											value={77.8}
											precision={1}
											valueStyle={{ color: "#5450a9" }}
											prefix={<VerticalAlignMiddleOutlined />}
											suffix="Kg"
										/>
									</Card>
								</Col>
								<Col span={8}>
									<Card>
										<Statistic
											title="Goal"
											value={69}
											precision={1}
											valueStyle={{ color: "#cf1322" }}
											prefix={<ArrowDownOutlined />}
											suffix="Kg"
										/>
									</Card>
								</Col>
							</Row>
						</div>
					</div>

					<Carousel style={{ marginTop: "-10%" }} effect="fade">
						<div>
							<h3 style={contentStyle}>
								<Line {...config} />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>2</h3>
						</div>
						<div>
							<h3 style={contentStyle}>3</h3>
						</div>
						<div>
							<h3 style={contentStyle}>4</h3>
						</div>
					</Carousel>
					<div
						style={{
							textAlign: "center",
							marginTop: "25px",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<h1>Daily Progress</h1>
						<img
							className="goalSvg"
							src="https://www.flaticon.com/svg/static/icons/svg/2755/2755544.svg"
						/>
					</div>
					<InfoCard />
				</div>
			</Content>
			<Footer
				style={{
					textAlign: "center",
					fontFamily: "Hoefler Text, Georgia, Garamond, Times, serif",
					fontSize: "18px",
				}}
			>
				Don't let perfect be the enemy of good.
			</Footer>
		</Layout>
	);
}
export default FrontPage;
