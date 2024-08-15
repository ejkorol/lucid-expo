import Svg, { Path } from "react-native-svg";

interface MoonProps {
  size: number,
  color: string
};

const Moon = ({ size, color }: MoonProps) => {
  return (
    <Svg viewBox="0 0 99.85 99.85" height={size}>
      <Path d="M577.65,553.47a51.38,51.38,0,0,1-50.07-60.42,2.5,2.5,0,0,0-3.3-2.82A51.37,51.37,0,1,0,590,556a2.5,2.5,0,0,0-2.82-3.3A51.88,51.88,0,0,1,577.65,553.47Z" transform="translate(-687 -490)" fill={color}/>
    </Svg>
  );
}

export default Moon;
