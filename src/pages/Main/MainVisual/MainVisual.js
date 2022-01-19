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
  MainVisualLink,
} from './MainVisualStyles';

const scoreCategoryKr = {
  sensibility: '감성',
  intent_to_visit: '방문의사',
  impression_on_picture: '첫인상',
};

export default function MainVisual({ mainVisualData }) {
  const mainVisualRoute = mainVisualData.product.product_id;
  return (
    <MainVisualLink to={`/winners/${mainVisualRoute}`}>
      <MainVisualDiv>
        {mainVisualData && (
          <>
            <MainVisualImg src={mainVisualData.product.main_image} />
            <MainVisualDateDisplay>
              Site of the Day
              <MainVisualDate>
                {mainVisualData.product.created_at}
              </MainVisualDate>
            </MainVisualDateDisplay>
            <RadiusButton buttonType="shareIcon" />
            <MainVisualMain>
              <MainVisualMainTitle>
                {mainVisualData.product.product_name}
              </MainVisualMainTitle>
              <MainVisualMainInformation>
                BY
                <MainVisualMainInformationUserId>
                  {mainVisualData.product.user}
                </MainVisualMainInformationUserId>
                WITH
                <MainVisualMainInformationStrong>
                  {(
                    Object.values(mainVisualData.product.score).reduce(
                      (acc, curr) => {
                        return acc + Number(curr);
                      },
                      0
                    ) / Object.values(mainVisualData.product.score).length
                  ).toFixed(2)}
                </MainVisualMainInformationStrong>
              </MainVisualMainInformation>
              <MainVisualMainGauges>
                {Object.entries(mainVisualData.product.score).map(
                  (singleScore, index) => {
                    return (
                      <MainVisualMainGauge key={index}>
                        <RatingCircle
                          type={singleScore[0]}
                          rate={singleScore[1] * 10}
                          circleId={singleScore[0]}
                        />
                        <MainVisualMainGaugeLable>
                          {scoreCategoryKr[singleScore[0]]}
                        </MainVisualMainGaugeLable>
                      </MainVisualMainGauge>
                    );
                  }
                )}
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
    </MainVisualLink>
  );
}
