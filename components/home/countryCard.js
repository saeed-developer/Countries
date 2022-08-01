import Image from "next/image";
import { useRouter } from "next/router";
import { seprator } from "utils/seprator";
import styles from "./countryCard.module.scss";
const CountryCard = ({ countryData }) => {
  const { name, capital, flag, region, population } = countryData;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${name}`);
  };
  return (
    <div onClick={handleClick} className={styles["container"]}>
      <Image alt={name} src={flag} width={250} height={187.5} />
      <div>{name}</div>
      <div>
        Population: <span>{seprator(population)}</span>
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
