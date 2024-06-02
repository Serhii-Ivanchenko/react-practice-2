import { Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({ id, text, number, onDelete }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{number}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
