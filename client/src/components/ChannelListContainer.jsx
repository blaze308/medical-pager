import React from "react";
// import { ChannelList, useChatContext } from "stream-chat-react";
// import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import { ChannelSearch, TeamChannelList } from "./index.js";
import { ChannelList } from "stream-chat-react";
import TeamChannelPreview from "./TeamChannelPreview";

const Sidebar = () => (
	<div className="channel-list__sidebar">
		<div className="channel-list__sidebar__icon1">
			<div className="icon1__inner">
				<img src={HospitalIcon} alt="hospital logo" width="30" />
			</div>
		</div>
		<div className="channel-list__sidebar__icon2">
			<div className="icon1__inner">
				<img src={LogoutIcon} alt="logout logo" width="30" />
			</div>
		</div>
	</div>
);

const CompanyHeader = () => (
	<div className="channel-list__header">
		<p className="channel-list__header__text">Medical Pager</p>
	</div>
);

const ChannelListContainer = () => {
	return (
		<>
			<Sidebar />
			<div className="channel-list__list__wrapper">
				<CompanyHeader />
				<ChannelSearch />
				<ChannelList
					filters={{}}
					channelRenderFilterFn={() => {}}
					List={(listProps) => <TeamChannelList {...listProps} type="team" />}
					Preview={(previeProps) => (
						<TeamChannelPreview {...previeProps} type="team" />
					)}
				/>
				<ChannelList
					filters={{}}
					channelRenderFilterFn={() => {}}
					List={(listProps) => (
						<TeamChannelList {...listProps} type="messaging" />
					)}
					Preview={(previeProps) => (
						<TeamChannelPreview {...previeProps} type="messaging" />
					)}
				/>
			</div>
		</>
	);
};

export default ChannelListContainer;
