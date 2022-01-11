import {
  CircleDiv,
  CircleWrapper,
  Circle,
  CirclePercent,
} from './RatingCircleStyle';

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const typeStrokeColor = {
  design: '#df6c4f',
  usability: '#ecd06f',
  creativity: '#3cccdb',
  content: '#1a00aa',
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
          className="circle-progress"
          dashOffset={dashOffset}
          circleId={circleId}
          type={type}
        />
      </CircleWrapper>
      <CirclePercent>{ratingText}</CirclePercent>
    </CircleDiv>
  );
}
