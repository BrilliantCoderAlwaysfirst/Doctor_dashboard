import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet, FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsFileText } from 'react-icons/bs';
import { MdMeetingRoom } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { darkThemeColor } from "../utils";
import AvatarImage from '../assets/doctor.jpeg';



function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Dr. Swati Verma</Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Treatment</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Invoices</h3>
          </Link>
          <Link>
            <TbReportSearch />
            <h3>Reports</h3>
          </Link>

          <Link>
            <FaMoneyBillAlt />
            <h3>Fees</h3>
          </Link>
          <Link>
            <MdMeetingRoom />
            <h3>Fix Meeting</h3>
          </Link>
          <Link>
            <BsFileText />
            <h3>Forms</h3>
          </Link>

        </Links>
        <ContactContainer>
          <span>Having troubles in Reports?</span>
          <a href="/">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #220915;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Avatar = styled.img`
  /* height: 128px; */
  width: 157px;
  object-fit: cover;
  border-radius: 12%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  margin-top: 30px;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  padding: 10px 0px;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 9%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 110px;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
