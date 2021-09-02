const styles = {
  root: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    gridTemplateRows: '100px 1fr',
    gridTemplateAreas: `
      "header header"
      "side main"
    `,
  },
};

if (window.innerWidth <= 900) {
  styles.root.gridTemplateAreas = `
  "header header"
  "main main"
  `;
}

export default styles;
