import Image from "next/image";
import { Seprator } from "utils/seprator";
import styles from "./countryCard.module.scss";
const CountryCard = ({ countryData }) => {
  const { name, capital, flag, region, population } = countryData;
  return (
    <div className={styles["container"]}>
      <Image src={flag} width={250} height={187.5} />
      <div>{name}</div>
      <div>
        Population: <span>{Seprator(population)}</span>
      </div>
      <div>
        Region: <span>{region}</span>
      </div>
      <div>
        Capital: <span>{capital}</span>
      </div>
    </div>
  );
};

export default CountryCard;
