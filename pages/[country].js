import { COUNTRY } from "api/EndPoints";
import { countriesInstance } from "api/Instance";
import styles from "./country.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import Detail from "components/detail/detail";
import latinize from "latinize";
const Country = ({ detail }) => {
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <button
        onClick={() => router.back()}
        className={styles["container__btn"]}
      >
        <BiArrowBack /> <span>Back</span>
      </button>
      <div className={styles["container__detail"]}>
        <Detail name={router.query.country} detail={detail[0]} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { country } = query;
  const englishName = latinize(country);
  const detail = await countriesInstance.get(
    COUNTRY(
      englishName,
      "flag,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders"
    )
  );
  return {
    props: { detail: detail.data },
  };
}
export default Country;
