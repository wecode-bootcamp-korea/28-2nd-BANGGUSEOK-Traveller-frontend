import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainVisualLink = styled(Link)`
  text-decoration: none;
`;

const MainVisualImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(80%);
`;

const MainVisualDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 37vw;
  color: #fff;

  &:hover > ${MainVisualImg} {
    filter: brightness(50%);
    transition: filter 0.5s ease;
  }

  > button {
    position: absolute;
    right: 66px;
    top: 66px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
`;

const MainVisualDateDisplay = styled.span`
  position: absolute;
  left: 66px;
  top: 66px;
`;

const MainVisualDate = styled.span`
  margin-left: 5px;
  font-weight: 300;
`;

const MainVisualMain = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MainVisualMainTitle = styled.p`
  margin-bottom: 24px;
  font-size: 38px;
  font-weight: 800;
`;

const MainVisualMainInformation = styled.p`
  margin-bottom: 32px;
  font-weight: 300;
`;

const MainVisualMainInformationStrong = styled.strong`
  margin: 0 5px;
`;

const MainVisualMainInformationUserId = styled.strong`
  margin: 0 5px;
  color: #6dc2b6;
`;

const MainVisualMainGauges = styled.div`
  display: flex;
`;

const MainVisualMainGauge = styled.div`
  width: 80px;
  margin: 0 18px;
`;

const MainVisualMainGaugeLable = styled.ul`
  padding-top: 8px;
  font-size: 15px;
`;

const MainVisualBottomMenu = styled.ul`
  position: absolute;
  display: flex;
  left: 66px;
  bottom: 66px;
`;

const MainVisualBottomMenuList = styled.li`
  margin-right: 15px;
`;

const MainVisualJuries = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 66px;
  bottom: 66px;
`;

const MainVisualJuriesList = styled.div`
  margin-left: 15px;
  display: felx;
`;

const MainVisualJury = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 6px;
  border-radius: 50%;
  border: none;
`;

export {
  MainVisualDiv,
  MainVisualImg,
  MainVisualDateDisplay,
  MainVisualDate,
  MainVisualMain,
  MainVisualMainTitle,
  MainVisualMainInformation,
  MainVisualMainInformationStrong,
  MainVisualMainInformationUserId,
  MainVisualMainGauges,
  MainVisualMainGauge,
  MainVisualMainGaugeLable,
  MainVisualBottomMenu,
  MainVisualBottomMenuList,
  MainVisualJuries,
  MainVisualJuriesList,
  MainVisualJury,
  MainVisualLink,
};
