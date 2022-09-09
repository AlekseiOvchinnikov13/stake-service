import {PROJECTS_DATA} from '../../../data/projects';
import useProjects from '../../../hooks/useProjects';

import styles from '../../../styles/components/DropDown.module.scss';

const DropDown = ({
  onSelect,
  closeHandler,
  isOpen,
  activeCoin
}) => {
  const coins = useProjects();

  const selectHandler = val => {
    onSelect(val);
    closeHandler();
  };

  return (
    <div className={`${styles.dropDown} ${isOpen ? styles.dropDownOpen : ''}`}>
      {coins && coins.filter(el => el.name !== activeCoin.name && el.current_price)
        .map(coin =>
          !!PROJECTS_DATA.find(project => project.id === coin.id).commonInfo?.apy &&
          (<button
            key={coin.symbol}
            onClick={() => selectHandler(coin)}
          >
            {`${coin.name} (${coin.symbol.toUpperCase()})`}
          </button>)
        )}
    </div>
  );
};

export default DropDown;