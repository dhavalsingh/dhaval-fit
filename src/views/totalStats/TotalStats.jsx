import React from "react";
import { Card } from "antd";
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
		<div style={{ color: "black" }}>
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
		</div>
	);
}
export default TotalStats;
