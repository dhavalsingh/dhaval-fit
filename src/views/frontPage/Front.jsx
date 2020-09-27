import React, { useRef } from "react";
import {
	Layout,
	Menu,
	Carousel,
	Card,
	Row,
	Col,
	Statistic,
	Progress,
	Button,
	Tooltip,
	Anchor,
	BackTop,
} from "antd";
import { Line } from "@ant-design/charts";
import {
	ArrowUpOutlined,
	ArrowDownOutlined,
	VerticalAlignMiddleOutlined,
	RightCircleFilled,
	LeftCircleFilled,
} from "@ant-design/icons";
import InfoCard from "./infoCard";
import { config } from "../../data/weight";
import { cardData } from "../../data/cardData";
import Nutrition from "../nutrition";
import "./styles.css";
import { useState } from "react";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Link } = Anchor;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function FrontPage() {
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);
	const today = cardData.length - 1;
	const [day, setDay] = useState(today);
	const [flip, setFlip] = useState(false);
	const contentStyle = {
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "white",
	};
	const flipAnimation = {
		transformOrigin: "50% -1.5%",
		animation: `${flip ? "flip 1s infinite linear" : ""}`,
	};

	function flipCal() {
		setFlip(true);
		setTimeout(() => setFlip(false), 1000);
	}

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
					<Menu.Item key="2" onClick={executeScroll}>
						Nutrition
					</Menu.Item>
					<Menu.Item key="3">Workout</Menu.Item>
				</Menu>
			</Header>
			<Content>
				<div className="site-layout-content">
					<div className="header">
						<div>
							<h2>60 Days To</h2>
							<div style={{ display: "flex", marginTop: "-40px" }}>
								<h2 style={{ padding: "0px" }}>Gl</h2>{" "}
								<Progress
									type="circle"
									trailColor="grey"
									strokeColor="#5450a8"
									percent={28}
									format={(percent) => `Day ${percent}`}
									width={90}
								/>
								<h2 style={{ padding: "0px 30px 10px 10px" }}>ry</h2>
							</div>
						</div>

						<div>
							<img className="mainSvg" src={require("./gym1.gif")} />
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
											value={76.9}
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
					<div className="sectionHead">
						<h1>Daily Progress</h1>
						{/* <img
							className="goalSvg"
							src="https://www.flaticon.com/svg/static/icons/svg/2755/2755544.svg"
						/> */}
					</div>
					<div className="cardNav">
						<Tooltip placement="left" title="Go to previous day">
							<Button
								style={{ marginRight: "90px" }}
								type="text"
								onClick={() => {
									flipCal();
									setDay(day - 1);
								}}
								disabled={day === 0}
								icon={<LeftCircleFilled />}
							></Button>
						</Tooltip>

						<Tooltip placement="top" title="Go to today">
							<Button
								onClick={() => {
									flipCal();
									setDay(today);
								}}
								type="link"
							>
								<div class="icon calendar">
									<i></i>
									<i style={flipAnimation}>{/* {day} */}</i>
								</div>
							</Button>
						</Tooltip>
						<Tooltip placement="right" title="Go to next day">
							<Button
								style={{ marginLeft: "90px" }}
								type="text"
								onClick={() => {
									flipCal();
									setDay(day + 1);
								}}
								disabled={day === today}
								icon={<RightCircleFilled />}
							></Button>
						</Tooltip>
					</div>

					<InfoCard cardData={cardData[day]} />
					<BackTop />
					<div ref={myRef}>
						<h1 style={{paddingTop:"100px"}} className="sectionHead">NUTRITION</h1>
						<Nutrition />
					</div>
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
