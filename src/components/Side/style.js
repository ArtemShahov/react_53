import style from '../../colors/colors';

export default {
  side: {
    backgroundColor: style.dark,
    gridArea: 'side',
    borderRight: `2px solid ${style.darker}`,
    padding: '25px',
    display: 'flex',
    flexDirection: 'flex-column',
    gap: '20px',
  },
};
