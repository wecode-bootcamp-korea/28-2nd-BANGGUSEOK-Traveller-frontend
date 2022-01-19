import {
  CircleDiv,
  CircleWrapper,
  Circle,
  CirclePercent,
} from './RatingCircleStyle';

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const typeStrokeColor = {
  sensibility: '#df6c4f',
  intent_to_visit: '#ecd06f',
  impression_on_picture: '#3cccdb',
};

export default function RatingCircle({ type, rate, circleId }) {
  const dashOffset = CIRCUMFERENCE * (1 - rate / 100);
  const ratingText = (rate / 10).toFixed(2);

  return (
    <CircleDiv>
      <CircleWrapper>
        <Circle r="38" cy="41" cx="41" strokeColor={typeStrokeColor[type]} />
        <Circle
          r="38"
          cy="41"
          cx="41"
          strokeColor={typeStrokeColor[type]}
          dashOffset={dashOffset}
          circleId={circleId}
          type={type}
        />
      </CircleWrapper>
      <CirclePercent>{ratingText}</CirclePercent>
    </CircleDiv>
  );
}
