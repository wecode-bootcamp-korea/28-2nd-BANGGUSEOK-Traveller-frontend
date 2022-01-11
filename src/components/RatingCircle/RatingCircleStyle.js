import styled from 'styled-components';

const CircleDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const CircleWrapper = styled.svg`
  width: 84px;
  height: 84px;
  transform: rotate(-90deg);
`;

const Circle = styled.circle`
  stroke: ${props => props.strokeColor};
  stroke-width: 3;
  fill: none;

  &:nth-child(1) {
    stroke-opacity: 0.3;
  }
  &:nth-child(2) {
    stroke-dasharray: 238;
    stroke-dashoffset: 238;
    animation: 1000ms ease 0s 1 normal forwards running donut-show-${props => props.circleId};
  }

  @keyframes donut-show-${props => props.circleId} {
    100% {
      stroke-dashoffset: ${props => props.dashOffset};
    }
  }
`;

const CirclePercent = styled.div`
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: center;
`;

export { CircleDiv, CircleWrapper, Circle, CirclePercent };
