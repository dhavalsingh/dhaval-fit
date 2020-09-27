import React from "react";
import { Tabs } from "antd";
import "./style.css";

const { TabPane } = Tabs;
function Nutrition() {
	return (
		<div className="blogText">
			<p>Before we start, why should you trust me?</p>
			<p>
				YOU SHOULDNT. Whatever i am writing is based on my past experiences and
				whatever research i have done. DO YOUR OWN DAMN RESEARCH, it will help
				you a lot once you start to understand how it actually works. I will try
				and include links wherever possible but nothing beats reading up things
				on your own.
			</p>
			<p>That being said, let's begin!</p>
			<p>
				As a begginer there are only 2 things to keep in mind when it comes to
				Nutrition.
			</p>
			<ul>
				<li>Consistency is the key</li>
				<li>Keep it simple stupid</li>
			</ul>
			<p>Keeping that in mind, the 3 most basic habbits to tackle first are</p>
			<Tabs defaultActiveKey="1">
				<TabPane tab="Sleep" key="1">
					<span className="tldrText">TLDR: Sleep around 8hrs a day.</span>
					<p>
						One of the most important aspect of getting in shape, whether it's
						losing fat or gaining muscle, is getting enough sleep. Usually
						recomended 8hrs a day is the sweet spot but anywhere from 7-9 should
						be good enough. Good sleep helps your body recover well and at the
						same time keeps the hormones in check which have a huge effect on
						how your body feels.
					</p>
				</TabPane>
				<TabPane tab="Water" key="2">
					<span className="tldrText">
						TLDR: Drink around 1 Gallon(3.7L) of water everyday.{" "}
					</span>
					<p>
						Cannot stress enough how important drinking water is for you. Being
						one of the simplest things to control it's easily one of the most
						neglected one too. Can vary a bit on where you live and what time of
						the year it is but make it a point to drink around 1 gallon(3.7L) of
						water everyday.
					</p>
				</TabPane>
				<TabPane tab="Clean Eating" key="3">
					<span className="tldrText">
						TLDR: Eat clean, cut out proccesed foods and sugar.
					</span>
					<p>
						Start small. Cut out few things you know is unhealthy and you
						consume a lot. The most common place to start would be junk/fast
						food, refined sugar, soft drinks etc. You dont need to stop
						completely, just reduce the amount and see how you feel. The best
						way is to replace it by something healthy, for eg instead of
						drinking 2 cans of soda, have one can with a glass of water. One of
						the hardest of the 3 habbits to overcome for sure.
					</p>
					<p>
						<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4077693/">
							Research &nbsp;
						</a>
						 has shown we usually associate few kinds of food to the activity we
						are doing. For example, I always ate chips or fried stuff while
						watching movies/Tv shows. Unconsiously I had associated eating those
						things with watching something, it was much easier to keep it in
						check once I knew what the trigger was. I started chewing gum to
						overcome this and it worked wonders. Find your trigger and work on
						it.
					</p>
				</TabPane>
			</Tabs>
		</div>
	);
}
export default Nutrition;