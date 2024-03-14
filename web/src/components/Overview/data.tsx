import styles from './data.module.less';
const nameList = ['Members', 'Carbon Emissions Reduction(KG)', 'Transactions'];
const nameList1 = [
  'Work out',
  'Burning Calories(Kcal)',
  'Mileage(KM)',
  'High intensity',
  'Moderate intensity',
  'Light intensity',
];
const nameList2 = ['Sleep', 'Sub-health', 'Relaxed', 'High pressure'];
export const Data = () => {
  return (
    <div className={styles.all}>
      <img
        src="/assets/upload/moreHealth.png"
        className={styles.healthImg}
        alt=""
      />
      <div className={styles.allDataWrap}>
        <div className={`${styles.showItem}`}>
          <div className={styles.dataList}>
            {nameList.map((item) => {
              return (
                <div className={styles.li} key={item}>
                  <div className={styles.value}>0</div>
                  <div className={styles.name}>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.showItem} ${styles.showItem1}`}>
          <div className={`${styles.dataList} ${styles.dataList1}`}>
            {nameList1.map((item) => {
              return (
                <div className={styles.li} key={item}>
                  <div className={styles.value}>0</div>
                  <div className={styles.name}>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.showItem} ${styles.showItem3}`}>
          <div className={`${styles.dataList} ${styles.dataList2}`}>
            {nameList2.map((item) => {
              return (
                <div className={styles.li} key={item}>
                  <div className={styles.value}>0</div>
                  <div className={styles.name}>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
