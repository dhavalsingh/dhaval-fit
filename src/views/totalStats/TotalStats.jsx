import React from "react";
import { Statistic, Card, Row, Col } from 'antd';
import { ThunderboltOutlined, ClockCircleOutlined, QqOutlined, BookOutlined } from '@ant-design/icons';
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { useState } from "react";

function TotalStats() {
	/* 	const { countUp } = useCountUp({
		start: 0,
		end: 1234567,
		delay: 5,
		duration: 5,
	}); */
	const [flag, setFlag] = useState(false);
	return (
/* 		<div>
			<Card title="Small size card" style={{ width: "100%" }}>
				<div>
					<CountUp
						start={0}
						delay={0}
						end={160527.012}
						duration={10}
						separator=" "
						decimals={4}
						decimal="."
						prefix="EUR "
						suffix=" left"
					>
						{({ countUpRef, start }) => (
							<InView as="div" onChange={(inView, entry) => ( inView ? start : undefined)}>
								<span ref={countUpRef} />
							</InView>
						)}
					</CountUp>
				</div>
			</Card> 

		</div> */
		<div className="site-statistic-demo-card">
		<Row gutter={16}>
		  <Col span={6}>
			<Card className="statsSecond" >
			  <Statistic
				title="Workouts"
				value={1}
				precision={0}
				valueStyle={{ color: '#3f8600' }}
				prefix={<ThunderboltOutlined />}
				suffix=""
			  />
			</Card>
		  </Col>
		  <Col span={6}>
			<Card className="statsSecond">
			  <Statistic
				title="Minutes spent exercising"
				value={90}
				precision={0}
				valueStyle={{ color: '#3f8600' }}
				prefix={<ClockCircleOutlined />}
				suffix=""
			  />
			</Card>
		  </Col>
		  <Col span={6}>
			<Card className="statsSecond">
			  <Statistic
				title="Steps taken"
				value={5000}
				precision={0}
				valueStyle={{ color: '#3f8600' }}
				prefix={<QqOutlined />}
				suffix=""
			  />
			</Card>
		  </Col>
		  <Col span={6}>
			<Card className="statsSecond">
			  <Statistic
				title="Pages Read"
				value={100}
				precision={0}
				valueStyle={{ color: '#3f8600' }}
				prefix={<BookOutlined />}
				suffix=""
			  />
			</Card>
		  </Col>
		</Row>
	  </div>
	);
}
export default TotalStats;
