import React from 'react';
import RadiusButton from '../../../components/Buttons/RadiusButton';
import RatingCircle from '../../../components/RatingCircle/RatingCircle';
import {
  MainVisualDiv,
  MainVisualImg,
  MainVisualDateDisplay,
  MainVisualDate,
  MainVisualMain,
  MainVisualMainTitle,
  MainVisualMainInformation,
  MainVisualMainInformationUserId,
  MainVisualMainInformationStrong,
  MainVisualMainGauges,
  MainVisualMainGauge,
  MainVisualMainGaugeLable,
  MainVisualBottomMenu,
  MainVisualBottomMenuList,
  MainVisualJuries,
  MainVisualJuriesList,
  MainVisualJury,
} from './MainVisualStyles';

export default function MainVisual({ mainVisualData }) {
  return (
    <MainVisualDiv>
      {mainVisualData && (
        <>
          <MainVisualImg src={mainVisualData.product.main_image} />
          <MainVisualDateDisplay>
            Site of the Day{' '}
            <MainVisualDate>{mainVisualData.product.created_at}</MainVisualDate>
          </MainVisualDateDisplay>
          <RadiusButton buttonType="shareIcon" />
          <MainVisualMain>
            <MainVisualMainTitle>
              {mainVisualData.product.product_name}
            </MainVisualMainTitle>
            <MainVisualMainInformation>
              BY{' '}
              <MainVisualMainInformationUserId>
                {mainVisualData.product.user}
              </MainVisualMainInformationUserId>{' '}
              WITH{' '}
              <MainVisualMainInformationStrong>
                {mainVisualData &&
                  Math.round(
                    mainVisualData.product.score.reduce(
                      (acc, curr) => acc + curr.rate,
                      0
                    ) / mainVisualData.product.score.length
                  ) / 10}
              </MainVisualMainInformationStrong>
            </MainVisualMainInformation>
            <MainVisualMainGauges>
              {mainVisualData &&
                mainVisualData.product.score.map((division, index) => (
                  <MainVisualMainGauge key={index}>
                    <RatingCircle
                      type={division.type}
                      rate={division.rate}
                      circleId={index}
                    />
                    <MainVisualMainGaugeLable>
                      {division.type}
                    </MainVisualMainGaugeLable>
                  </MainVisualMainGauge>
                ))}
            </MainVisualMainGauges>
          </MainVisualMain>
          <MainVisualBottomMenu>
            <MainVisualBottomMenuList>
              <RadiusButton buttonType="VisitSite" />
            </MainVisualBottomMenuList>
            <MainVisualBottomMenuList>
              <RadiusButton buttonType="Collect" />
            </MainVisualBottomMenuList>
          </MainVisualBottomMenu>
          <MainVisualJuries>
            <RadiusButton buttonType="Jury votes" />
            <MainVisualJuriesList>
              <MainVisualJury src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" />
              <MainVisualJury src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" />
              <MainVisualJury src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" />
              <MainVisualJury src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" />
              <MainVisualJury src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" />
            </MainVisualJuriesList>
          </MainVisualJuries>
        </>
      )}
    </MainVisualDiv>
  );
}
