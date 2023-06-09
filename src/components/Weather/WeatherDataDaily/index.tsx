// Components
import { WeatherDataDailyItem } from 'components/Weather';
// Other imports
import { WeatherObjectFull } from 'utils/interfaces';
import { DailyWeatherContainer } from './styles';

type Props = {
  data: WeatherObjectFull | null;
};

const WeatherDataDaily = ({ data }: Props) => {
  return (
    <>
      <h2>Daily Weather</h2>

      <DailyWeatherContainer>
        {data?.daily.time.map((time, index) => {
          const dayObject = {
            time: time,
            weathercode: data.daily.weathercode[index],
            precipitation_probability_max:
              data.daily.precipitation_probability_max[index],
            temperature_2m_max: data.daily.temperature_2m_max[index],
            temperature_2m_min: data.daily.temperature_2m_min[index],
            tempUnit: data.daily_units.temperature_2m_max,
          };

          return <WeatherDataDailyItem key={index} data={dayObject} />;
        })}
      </DailyWeatherContainer>
    </>
  );
};

export default WeatherDataDaily;
